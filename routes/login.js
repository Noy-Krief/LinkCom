const loginController = require('../controllers/login');
const express = require('express');

var loginRouter = express.Router();

loginRouter.route('/login').get(loginController.goToLogin);

loginRouter.post('/login', (req, res) => {
    loginController.validateAccount(req, res);
})

module.exports = loginRouter;