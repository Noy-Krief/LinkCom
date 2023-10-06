const accountController = require('../controllers/accounts');
const express = require('express');

var accountRouter = express.Router();

accountRouter.get('/profile', (req, res) => {
    accountController.getAccountByEmail(req.body.email, res);
});

// loginRouter.post('/login', (req, res) => {
//     loginController.validateAccount(req.body, res);
// })

module.exports = accountRouter;