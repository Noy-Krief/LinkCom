const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    group_name : {
        type: String,
        required: true
    },
    manager : {
        type: String,
        required: true
    },
    members : {
        type: Array[String],
        required: true,
        default: []
    },
    group_picture : {
        type: String,
        required: false
    }
}, { collection: 'groups'});

module.exports = mongoose.model('Group', Group);