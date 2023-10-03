const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },
    hates : {
        type: String,
        default: ""
    }
}, { collection: 'posts'});

module.exports = mongoose.model('Post', Post);