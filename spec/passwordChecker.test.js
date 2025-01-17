const isValidPassword = require('../passwordChecker');

describe('Password Validation', () => {
    it('should return false for passwords shorter than 8 characters', () => {
        expect(isValidPassword('1234567')).toBe(false);
    });
    it('should return true for password longer or equal to 8 characters', () => {
        expect(isValidPassword('12345678')).toBe(true);
    });
});
