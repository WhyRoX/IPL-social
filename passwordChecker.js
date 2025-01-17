function isValidPassword(password) {
    if (!hasMinLength(password)) return false;
    if (!hasSpecialCharacter(password)) return false;
    if (!hasDigit(password)) return false;
    if (!notContainsIPL(password)) return false;

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

function hasDigit(password) {
    const digitPattern = /\d/;
    return digitPattern.test(password);
}

function notContainsIPL(password) {
    const forbiddenPattern = /ipl/i;
    return !forbiddenPattern.test(password);
}

module.exports = {
    isValidPassword,
    hasMinLength,
    hasSpecialCharacter,
    hasDigit,
    notContainsIPL
};