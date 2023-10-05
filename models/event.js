const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    author : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    }
}, { collection: 'events'});

module.exports = mongoose.model('Event', Event);