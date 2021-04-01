const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Config = require('../config.js');
const fs = require('fs');
const { User, ProfilePicture, Driver, Vehicle, Mongoose } = require('../models')

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
					}
				}
			})
			if (!data)
				return HandleError(res, 'Failed to fetch data.')

			return HandleSuccess(res, data)

		} catch (err) {
			HandleServerError(res, req, err)
		}
	},
}