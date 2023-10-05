const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    display_name : {
        type: String,
        required: true
    },
    mail : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    posts : {
        type: [String],
    },
    events : {
        type: [String],
    },
    future_revenges : {
        type: [String],
    },
    profile_picture : {
        type: String,
    }
}, { collection: "accounts"});

module.exports = mongoose.model('Account', Account);
