const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Config = require('../config.js');
const fs = require('fs');
const { RealtimeListener } = require('../services')
const { User, Mongoose, PersonalChat, RoomChat, ProfilePicture } = require('../models')
const Controllers = require('../controllers')

const {
	IsExists, Insert, Find, CompressImageAndUpload, FindAndUpdate, Delete,
	HandleSuccess, HandleError, HandleServerError, Aggregate,
	ValidateEmail, PasswordStrength, ValidateAlphanumeric, ValidateLength, ValidateMobile, isDataURL, GeneratePassword, FindOne
} = require('./BaseController');

module.exports = {

	PersonalChat: async (socket, io) => {
		try {

			socket.on('startchat', async function (chat_id, sender_id, receiver_id) {
				const room_name = chat_id;
				socket.join(room_name);
				let updated = await FindAndUpdate(PersonalChat, { _id: chat_id, "chats.receiver_id": receiver_id, "chats.seen": false }, { "chats.$[].seen": true });
				let chatList = await Find(PersonalChat, { _id: chat_id }, { chats: { $slice: [0, 50] } }, { 'chats.createdAt': -1 });
				socket.emit('chathistory', chatList[0].chats);
			});

			socket.on('send_message', async ({ chat_id, sender_id, receiver_id, message }) => {
				const room_name = chat_id;
				let data = {
					sender_id: sender_id,
					receiver_id: receiver_id,
					message: message,
					seen: false
				}

				const room_length = io.of("/personal-chat").adapter.rooms.get(room_name).size

				if (room_length > 1) {
					data.seen = true
				}

				const where = { _id: chat_id }
				const query = { $push: { chats: data } }

				let updated = await FindAndUpdate(PersonalChat, where, query, true)
				if (updated) {
					if (room_length > 1)
						socket.broadcast.to(room_name).emit('message', data);
					else {
						// notification
					}
				}
			});

			socket.on('send_image', async ({ chat_id, sender_id, receiver_id, image_path }) => {
				//Upload the image via api call first then send socket data with image id
				const room_name = chat_id;

				let data = {
					sender_id: sender_id,
					receiver_id: receiver_id,
					image: image_path,
					seen: false
				}

				const room_length = io.of("/personal-chat").adapter.rooms.get(room_name).size

				if (room_length > 1) {
					data.seen = true
				}

				const where = { _id: chat_id }
				const query = { $push: { chats: data } }

				let updated = await FindAndUpdate(PersonalChat, where, query, true)
				if (updated) {
					if (room_length > 1)
						socket.broadcast.to(room_name).emit('message', data);
					else {
						// notification
					}
				}
			});

		} catch (err) {
			console.log(err)
		}
	},


	RoomChat: async (socket, io) => {
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
							$each: [ data ],
         					$slice: Config.room_chat_count_limit * -1
						}
					}
				}

				let updated = await FindAndUpdate({
					model: RoomChat,
					where: where,
					update: query
				})
				if (updated){
					socket.emit('message_delivered',{_id: updated.chats[updated.chats.length - 1]._id, message_temp_id: _id});
					
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
	}
}


