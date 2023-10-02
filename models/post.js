const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: false
    },
    likes : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Post', Post);