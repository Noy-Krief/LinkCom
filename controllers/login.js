const loginService = require('../services/account');

const goToLogin = (req, res) => {
        res.render('login.ejs')
};

const validateAccount = async (req, res) => {
    const account = await loginService.getAccountByEmail(req.body.email);

    if (req.body.password == account[0].password) {
        req.session.userData = account;
        res.redirect('/home');
    } else {
        res.status(401).json({error: 'Authentication failed'})
    }
};

module.exports = {
    goToLogin,
    validateAccount
};