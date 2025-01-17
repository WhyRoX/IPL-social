const { isValidPassword, hasSpecialCharacter } = require('../passwordChecker');

describe('Password Validation', () => {
    it('should return false for passwords shorter than 8 characters', () => {
        expect(isValidPassword('1234567')).toBe(false);
    });

    it('should return true for password longer or equal to 8 characters', () => {
        expect(isValidPassword('12345678&')).toBe(true);
    });

    it('should return false for passwords without a special character', () => {
        expect(isValidPassword('aB1cdefg')).toBe(false);
    });

    it('should return true for passwords with a special character', () => {
        expect(isValidPassword('aB1!cdef')).toBe(true);
    });

    it('should return false for passwords without a digit', () => {
        expect(isValidPassword('aBcdef!@')).toBe(false);
    });
    
});

describe('hasSpecialCharacter', () => {
    it('should return false for passwords without a special character', () => {
        expect(hasSpecialCharacter('aB1cdefg')).toBe(false);
    });

    it('should return true for passwords with a special character', () => {
        expect(hasSpecialCharacter('aB1!cdef')).toBe(true);
    });
})

