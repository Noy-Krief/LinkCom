const Account = require('../services/account');

const index = (req, res) => {
    res.render('accounts.ejs', { account: Account.getAccountByEmail("kriefnoy@getMaxListeners.com") });
}

module.exports = { index };