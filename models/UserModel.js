const Config = require('../config.js')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	mobile: { type: String, required: true, unique: true, trim: true },
	name: { type: String, required: true, trim: true },
	username: { type: String, required: true, trim: true, unique: true },
	gender: { type: String, required: true, enum: ['male', 'female'], trim: true },
	profile_picture_id: { type: Schema.Types.ObjectId, ref: 'profile_pictures' },
	dob: { type: Date, required: true, trim: true },
	city: { type: String, required: true, trim: true },
	country: { type: String, required: true, trim: true },
	bio: { type: String, required: true, trim: true },
	relation_status: { type: String, required: true, enum: ['Single', 'In A Relationship', 'Married'], trim: true },
	occupation: { type: String, required: true, trim: true },
	hobbies: [String],
	last_seen: { type : Date, default: Date.now, required: true },
	online_status: { type: Boolean, required: true, default: false },
	active_session_refresh_token: { type: String, required: true },
	access_token: { type: String },
	push_token: { type: String },
	location: {
		type: {
			type: String,
			enum: ['Point']
		},
		coordinates: {
			type: [Number]
		}
	},
},{ timestamps: true })

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel