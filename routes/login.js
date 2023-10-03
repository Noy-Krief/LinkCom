const loginController = require('../controllers/login');
const express = require('express');

var router = express.Router();

router.route('/login')
      .get(postController.getPosts)
      .post(postController.createPost);

// router.get('/posts', postController.getPosts);
    // .post(postController.createPost);

router.route('/:id')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(postController.deletePost);

module.exports = router;