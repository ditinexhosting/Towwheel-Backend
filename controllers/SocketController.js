const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Config = require('../config.js');
const fs = require('fs');
const { RealtimeListener } = require('../services')
const { User, ProfilePicture, Driver, Vehicle, Ride, Mongoose } = require('../models')
const Controllers = require('../controllers')

const {
	IsExists, Insert, Find, CompressImageAndUpload, FindAndUpdate, Delete,
	HandleSuccess, HandleError, HandleServerError, Aggregate,
	ValidateEmail, PasswordStrength, ValidateAlphanumeric, ValidateLength, ValidateMobile, isDataURL, GeneratePassword, FindOne
} = require('./BaseController');

var online_drivers = []
var ride_requests = []

module.exports = {

	DriverRideRequest: async (socket, io) => {
		try {
			let driver_id = null
			socket.on('initialize', async (data) => {
				driver_id = data._id
				const location = data.location
				socket.join(driver_id);
				online_drivers.push(driver_id)

				const driver_vehicles_data = await Find({
					model: Driver,
					where: { _id: driver_id },
					select: { vehicles: 1 },
					populate: 'vehicles'
				})
				if (!driver_vehicles_data)
					return

				const driver_owned_vehicles = driver_vehicles_data[0].vehicles.map(item => item.type)

				const nearest_ride_requests = await Find({
					model: Ride,
					where: {
						source: {
							$near: {
								$geometry: {
									type: "Point",
									coordinates: [location.longitude, location.latitude]
								},
								$maxDistance: Config.max_map_range,
							}
						},
						ride_status: 'searching',
						required_vehicle_type: { $in: driver_owned_vehicles }
					}
				})

				if (!nearest_ride_requests)
					return

				socket.emit('initial_ride_requests', nearest_ride_requests);
			});

			socket.on('accept_tow_request', async (data, callback) => {
				const update = await FindAndUpdate({
					model: Ride,
					where: { _id: data.ride_id },
					update: { $push: { available_drivers: data.driver_id } }
				});
				if (update)
					callback(true)
			});

			socket.on('decline_tow_request', async (data, callback) => {
				const update = await FindAndUpdate({
					model: Ride,
					where: { _id: data.ride_id },
					update: { $pull: { available_drivers: data.driver_id } }
				});
				if (update)
					callback(true)
			});

			socket.on('disconnect', async function () {
				online_drivers = online_drivers.filter(item => item !== driver_id)
			});

		} catch (err) {
			console.log(err)
		}
	},


	UserRideRequest: async (socket, io) => {
		try {
			let ride_id = null
			socket.on('initialize', async (data, callback) => {
				ride_id = data.ride_id
				socket.join(ride_id);
				ride_requests.push(ride_id)

				let ride_data = await Ride.find({ _id: ride_id })
					.populate({
						path: 'available_drivers',
						select: '_id reviews profile_picture location active_vehicle',
						populate: {
							path: 'reviews',
							model: 'reviews'
						}
					})
					.lean()
					.exec()

				ride_data = ride_data.length > 0 ? ride_data[0] : null
				if (ride_data) {
					for (let i = 0; i < ride_data.available_drivers.length; i++) {
						let item = ride_data.available_drivers[i]
						const user_details = await Find({
							model: User,
							where: { driver_details: item._id },
							select: 'name mobile'
						})
						item.user_details = user_details[0]
						const vehicle_details = await Find({
							model: Vehicle,
							where: { _id: item.active_vehicle, is_approved: true }
						})
						item.vehicle_details = vehicle_details.length > 0 ? vehicle_details[0] : null
						ride_data.available_drivers[i] = item
					}

					callback(ride_data)
				}
			});

			socket.on('cancel_ride_request', async (data, callback) => {

				// TO DO : Add code for realtime deleted status update in driver's socket

				const deleted = await Delete({
					model: Ride,
					where: { _id: data.ride_id },
				})
				if (!deleted)
					return

				callback(true)
			});

			socket.on('disconnect', async function () {
				ride_requests = ride_requests.filter(item => item !== ride_id)
			});

		} catch (err) {
			console.log(err)
		}
	},


	/*RoomChat: async (socket, io) => {
		try {
			let room_id = null
			let user = null

			socket.on('enter', async (room_name, user_details) => {
				room_id = room_name
				user = user_details
				socket.join(room_id);
				//User entry in database
				await FindAndUpdate({
					model: RoomChat,
					where: { _id: room_id },
					update: { $push: { online_users: user._id } }
				});
				let chatList = await RoomChat.find({ _id: room_id })
					.select({ chats: 1, online_users: 1 })
					.sort({ 'chats.createdAt': -1 })
					.populate({
						path: 'online_users',
						select: '_id name gender profile_picture_id',
						sort: { _id: -1 },
						populate: {
							path: 'profile_picture_id',
							model: 'profile_pictures',
							select: 'picture'
						}
					})
					.populate({
						path: 'chats.sender',
						select: '_id name profile_picture_id',
						populate: {
							path: 'profile_picture_id',
							model: 'profile_pictures',
							select: 'picture'
						}
					})
					.lean().exec()
				socket.emit('chat_history', chatList[0]);
				socket.broadcast.to(room_id).emit('new_user_entry', user);
			});

			socket.on('disconnect', async function () {
				//User exit in database
				await FindAndUpdate({
					model: RoomChat,
					where: { _id: room_id },
					update: { $pull: { online_users: user._id } }
				});
				socket.broadcast.to(room_id).emit('user_exit', user);
			});

			socket.on('send_message', async ({ content, type, _id }) => {
				let data = {
					sender: user._id,
					type: type,
					content: content
				}
				const where = { _id: room_id }
				const query = {
					$push: {
						chats: {
							$each: [data],
							$slice: Config.room_chat_count_limit * -1
						}
					}
				}

				let updated = await FindAndUpdate({
					model: RoomChat,
					where: where,
					update: query
				})
				if (updated) {
					socket.emit('message_delivered', { _id: updated.chats[updated.chats.length - 1]._id, message_temp_id: _id });

					data = {
						sender_id: user._id,
						sender_name: user.name,
						profile_picture: user.profile_picture,
						_id: updated.chats[updated.chats.length - 1]._id,
						type: updated.chats[updated.chats.length - 1].type,
						content: updated.chats[updated.chats.length - 1].content,
						createdAt: updated.chats[updated.chats.length - 1].createdAt
					}

					socket.broadcast.to(room_id).emit('new_message', data);
				}
			});

		} catch (err) {
			console.log(err)
		}
	},

	PictureComment: async (socket, io) => {
		try {
			socket.on('startcomment', async function (profile_picture_id) {
				const room_name = profile_picture_id;
				socket.join(room_name);
				let commentList = await Find({
					model: ProfilePicture,
					where: { _id: profile_picture_id },
					select: { comments: { $slice: [0, 50] } },
					sort: { 'comments.createdAt': -1 }
				});
				socket.emit('commenthistory', commentList[0].comments);
			});

			socket.on('send_comment', async ({ profile_picture_id, commenter_id, commenter_name, commenter_profile_picture, comment }) => {
				const room_name = profile_picture_id;
				let data = {
					commenter_id: commenter_id,
					commenter_name: commenter_name,
					commenter_profile_picture: commenter_profile_picture,
					comment: comment
				}
				// console.log(io.of("/picture-comment").adapter.rooms.get(room_name).size)
				const room_length = io.of("/picture-comment").adapter.rooms.get(room_name).size

				const where = { _id: profile_picture_id }
				const query = { $push: { comments: data } }

				let updated = await FindAndUpdate({
					model: ProfilePicture,
					where: where,
					update: query
				})
				if (updated) {
					if (room_length > 1)
						socket.broadcast.to(room_name).emit('comment', data);
					else {
						// notification
					}
				}
			});
		} catch (err) {
			console.log(err)
		}
	}*/
}


