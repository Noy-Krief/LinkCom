const Account = require('../models/account')

const createAccount = async (user, email, password) => {
    const account = new Account({
        display_name : user,
        username : email,
        password : password
    });

    return await account.save();
};

const getAccountByName = async (name) => {
    return await Account.findByName(name);
};

const getAccountByEmail = async (email) => {
    return await Account.findByEmail(email);
};

const updateAccount = async(name, password) => {
    const account = await getAccountByName(name);
    if (!account)
        return null;

    if (password)
        account.password = password;
    if (name)
        account.display_name = name;

    await account.save();
    return account;
};

const deleteAccount = async (username) => {
    const account = await getAccountByEmail(username);
    if (!account)
        return null;

    await account.remove();
    return account;
};

module.exports = {
    createAccount,
    getAccountByEmail,
    getAccountByName,
    updateAccount,
    deleteAccount
}

