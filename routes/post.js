const express = require('express');
var router = express.Router();
const postController = require('../controllers/posts');

router.route('/')
    .get(postController.getPosts)
    .post(postController.createPost);

router.route('/:id')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(postController.deletePost);

module.exports = router;