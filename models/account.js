const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    display_name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    profile_picture : {
        type: String,
        required: false
    }
}, { collection: "accounts"});

module.exports = mongoose.model('Account', Account);