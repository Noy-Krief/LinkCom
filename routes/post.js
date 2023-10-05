const postController = require('../controllers/posts');
const express = require('express');

var router = express.Router();

router.route('/posts')
      .get(postController.getPosts)
      .post(postController.createPost);

module.exports = router;