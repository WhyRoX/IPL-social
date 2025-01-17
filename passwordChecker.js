function isValidPassword(password) {
    const minLength = 8;

    if (password.length < minLength) {
        return false;
    }
    return true;
}

module.exports = isValidPassword;