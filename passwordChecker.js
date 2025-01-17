function isValidPassword(password) {
    

    if (!hasMinLength(password)) {
        return false;
    }

    if (!hasSpecialCharacter(password)) {
        return false;
    }
    const digitPattern = /\d/;
    if (!digitPattern.test(password)) {
        return false;
    }
    return true;
}

function hasMinLength(password) {
    const minLength = 8;
    return password.length >= minLength;
}

function hasSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

module.exports = {
    isValidPassword,
    hasMinLength,
    hasSpecialCharacter
};