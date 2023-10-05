const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    display_name : {
        type: String,
        required: true
    },
    user_name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    groups : {
        type: [String],
        required: true
    },
    posts : {
        type: [String],
        required: true
    },
    events : {
        type: [String],
        required: true
    },
    future_revenges : {
        type: [String],
        required: true
    },
    profile_picture : {
        type: String,
        required: true
    }
}, { collection: "accounts"});

module.exports = mongoose.model('Account', Account);
