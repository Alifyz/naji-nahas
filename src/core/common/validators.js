function isValid(login, password) {
    return login != undefined || password != undefined;
}
module.exports.isValid = isValid;