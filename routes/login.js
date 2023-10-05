const loginController = require('../controllers/login');
const postsRouter = require('../routes/post');
const express = require('express');

var router = express.Router();

router.route('/')
      .get(loginController.goToLogin);

router.use('/posts', postsRouter);

module.exports = router;