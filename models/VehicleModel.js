const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehicleTypeSchema=new Schema({
    name: { type: String, required: true, trim: true, enum: ['BIKE', 'TRUCK', 'PRIVATE'] }
})

const VehicleSchema = new Schema({
	is_approved: { type: Boolean, required: true, default: false },
    vehicle_number: { type: String, trim: true, required: true, unique: true },
	type: [VehicleTypeSchema]
},{ timestamps: true })

const VehicleModel = mongoose.model('vehicles', VehicleSchema)
module.exports = VehicleModel