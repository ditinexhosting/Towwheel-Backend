const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
	is_approved: { type: Boolean, required: true, default: false },
    vehicle_number: { type: String, trim: true, required: true, unique: true },
	type: { type: String, required: true, trim: true, enum: ['BIKE', 'TRUCK', 'PRIVATE'] },
	cost_per_km: { type: Number, required: true, trim: true, default: 0 },
},{ timestamps: true })

const VehicleModel = mongoose.model('vehicles', VehicleSchema)
module.exports = VehicleModel