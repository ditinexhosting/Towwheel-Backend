const Config = require('../config.js')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema=new Schema({
    sender_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    receiver_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    message: { type: String, trim: true },
    image: { type: String },
    seen: { type: Boolean, required: true, default: false },
},{ timestamps: true })

const ChatSchema=new Schema({
    members: [Schema.Types.ObjectId],
    chats: [MessageSchema],
    message_requester_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    message_request_accepted: { type: Boolean, required: true, default: false }
},{ timestamps: true })

const PersonalChatModel = mongoose.model('personal_chats', ChatSchema)
module.exports = PersonalChatModel