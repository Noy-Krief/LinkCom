const postController = require('../controllers/posts');
const express = require('express');

var postRouter = express.Router();

postRouter.route('/posts').get(postController.getPosts);
      // .post(postController.createPost);

module.exports = postRouter;