const accountService = require('../services/account');

const getAccountByEmail = async (req, res) => {
    const account = await accountService.getAccountByEmail(req.body.email);
    if (!account) {
        return "no such account";
    }
    res.json(account);
}

const index = (req, res) => {
    res.render('accounts.ejs', { account: Account.getAccountByEmail("kriefnoy@getMaxListeners.com") });
}

module.exports = { 
    index,
    getAccountByEmail
};