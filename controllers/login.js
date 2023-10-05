const loginService = require('../services/account');

const goToLogin = (req, res) => {
        res.render('login.ejs')
};

const validateAccount = async (req, res) => {
    const account = await loginService.getAccountByEmail(req);

    console.log(account);
    if (req == account['password']) {
        res.redirect('/posts');
    } else {
        alert("Error")
    }
};

module.exports = {
    goToLogin,
    validateAccount
};