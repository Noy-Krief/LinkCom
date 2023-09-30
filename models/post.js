const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title : {
        type: String,
        required: true
    },
    tool : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: false
    },
    published: {
        type: Date,
        default: Date.now
    },
    likes : {
        type: Array,
        default: []
    },
    comments : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Post', Post);