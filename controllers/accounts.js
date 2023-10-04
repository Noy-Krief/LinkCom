const Account = require('../models/account');

const index = (req, res) => {
    res.render('../views/accounts', { account: Account.getAccount() });
}

module.exports = { index };