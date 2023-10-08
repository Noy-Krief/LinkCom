const accountService = require('../services/account');

const getAccountByEmail = async (req, res) => {
    const userEmail = req.session.userData[0].email;
    // const posts = req.body.posts;
    const account = await accountService.getAccountByEmail(userEmail);
    if (!account) {
        return null;
    }
    res.render('accounts.ejs', {account : account});
}

// const index = (req, res) => {
//     res.render('accounts.ejs', { account: Account.getAccountByEmail("kriefnoy@getMaxListeners.com") });
// }

module.exports = { 
    // index,
    getAccountByEmail
};