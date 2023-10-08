const postController = require('../controllers/posts');
const express = require('express');

var postRouter = express.Router();

postRouter.get('/home', (req, res) => {
      const userData = req.session.userData;
      postController.getPosts(userData, res)

})


// route('/home').get(postController.getPosts);
      // .post(postController.createPost);

module.exports = postRouter;