const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Revenge = new Schema({
    title : {
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
    who : {
        type: String,
        required: true
    },
    published: {
        type: Date,
        default: Date.now
    },
    likes : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Revenge', Revenge);