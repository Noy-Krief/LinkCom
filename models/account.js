const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: Date,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    friends : {
        type: Array,
        default: []
    },
    posts : {
        type: Array,
        default: []
    },
    chats : {
        type: Array,
        default: []
    }
}, { collection: "accounts"});

module.exports = mongoose.model('Account', Account);