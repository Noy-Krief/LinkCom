const accountController = require('../controllers/accounts');
const express = require('express');

var accountRouter = express.Router();

accountRouter.get('/profile', (req, res) => {
    accountController.getAccountByEmail(req, res);
});

module.exports = accountRouter;