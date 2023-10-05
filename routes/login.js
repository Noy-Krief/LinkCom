const loginController = require('../controllers/login');
// const postsController = require('../controllers/posts');
const express = require('express');

var router = express.Router();

router.route('/login').get(loginController.goToLogin);

router.post('/login', (req, res) => {
    loginController.validateAccount(req.body.email);
})

module.exports = router;