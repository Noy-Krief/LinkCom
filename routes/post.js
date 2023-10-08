const postController = require('../controllers/posts');
const express = require('express');

var postRouter = express.Router();

postRouter.get('/home', (req, res) => {
      const userData = req.session.userData;
      postController.getPosts(userData, res);
});

postRouter.post('/posts', (req, res) => {
      postController.getPostsByAuthor(req, res);
      // return posts;
});

module.exports = postRouter;