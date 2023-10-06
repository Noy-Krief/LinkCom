const loginService = require('../services/account');

const goToLogin = (req, res) => {
        res.render('login.ejs')
};

const validateAccount = async (req, res) => {
    console.log(req);
    const account = await loginService.getAccountByEmail(req.email);

    if (req.password == account[0].password) {
        console.log(res);
        res.redirect('/posts');
    } else {
        console.log("Error")
    }
};

module.exports = {
    goToLogin,
    validateAccount
};