const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    author : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },
    hates : {
        type: Number,
        required: true,
        default: 0
    },
    group_name: {
        type: String,
        required: false
    }
}, { collection: 'posts'});

module.exports = mongoose.model('Post', Post);