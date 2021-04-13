const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Config = require('../config.js');
const fs = require('fs');
const { User, ProfilePicture, Driver, Vehicle, Ride, Mongoose } = require('../models')

const {
	IsExists, IsExistsOne, Insert, Find, FindOne, CompressImageAndUpload, FindAndUpdate, Delete,
	HandleSuccess, HandleError, HandleServerError,
	ValidateEmail, PasswordStrength, ValidateAlphanumeric, ValidateLength, ValidateMobile, isDataURL, GeneratePassword, Aggregate
} = require('./BaseController');

module.exports = {

	getNearestTows: async (req, res, next) => {
		try {
			let { latitude, longitude } = req.query
			const data = await Find({
				model: Driver,
				where: {
					location: {
						$near: {
							$geometry: {
								type: "Point",
								coordinates: [longitude,latitude]
							},
							$maxDistance: Config.max_map_range,
						}
					},
					is_available: true
				},
				populate: 'active_vehicle',
				select: { location: 1, active_vehicle: 1 }
			})
			if (!data)
				return HandleError(res, 'Failed to fetch data.')

			return HandleSuccess(res, data)

		} catch (err) {
			HandleServerError(res, req, err)
		}
	},
	createRideRequest: async (req, res, next) => {
		try {
			const { source_address, destination_address, source, destination, distance, time, tow_type } = req.body
			const user_id = req.user_id
			let inserted = await Insert({
				model: Ride,
				data: {
					source : {
						type: 'Point',
						coordinates: source,
						address: source_address
					},
					destination : {
						type: 'Point',
						coordinates: destination,
						address: destination_address
					},
					distance: distance,
					time: time,
					required_vehicle_type: tow_type,
					user: user_id,
					ride_status: 'searching'
				}
			})
			if (!inserted)
				return HandleError(res, 'Failed to create tow request. Please contact system admin.')

			return HandleSuccess(res, inserted)

		} catch (err) {
			HandleServerError(res, req, err)
		}
	},
}