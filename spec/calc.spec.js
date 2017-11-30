const calculatrice = require('../src/calc.js');
 
describe('Test of function calculatrice', () => {
	it('is a function', () => {
		expect(typeof calculatrice).toBe('function');
	});
});

describe('Test function params', () => {
	
	it('should have 3 parameters', () => {
		expect(calculatrice('*')).toBe(null);
		expect(calculatrice('*', 2)).toBe(null);
		expect(calculatrice('*', 2, 3)).not.toBe(null);
	});

	describe('Check signe', () => {
		it('should allow all 4 operations', () => {
			expect(calculatrice('*', 2, 3)).not.toBe(null);
			expect(calculatrice('+', 2, 3)).not.toBe(null);
			expect(calculatrice('-', 2, 3)).not.toBe(null);
			expect(calculatrice('/', 2, 3)).not.toBe(null);
		});
		
		it('should handle wrong values', () => {
			expect(calculatrice('', 2, 3)).toBe(null);
			expect(calculatrice('p', 2, 3)).toBe(null);
			expect(calculatrice(2, 2, 3)).toBe(null);
			expect(calculatrice(null, 2, 3)).toBe(null);
		});
	});

	describe('Check gauche', () => {
		it('should handle wrong values', () => {
			expect(calculatrice('*', '', 3)).toBe(null);
			expect(calculatrice('*', null, 3)).toBe(null);
			expect(calculatrice('*', -3, 3)).toBe(null);
			expect(calculatrice(null, 2, 3)).toBe(null);
		});
	});

	describe('Check droite', () => {
		it('should handle wrong values', () => {
			expect(calculatrice('*', 2, '')).toBe(null);
			expect(calculatrice('*', 2, null)).toBe(null);
			expect(calculatrice('*', 2, 430)).toBe(null);
			expect(calculatrice(null, 2, 450)).toBe(null);
		});
	});
});

describe('Check Operation', () => {
		it('should calculate', () => {
			expect(calculatrice('*', 2, 2)).toEqual(4);
			expect(calculatrice('+', 2, 2)).toEqual(4);
			expect(calculatrice('-', 2, 3)).toEqual(-1);
			expect(calculatrice('/', 4, 2)).toEqual(2);
			expect(calculatrice('/', 4, 0)).toBe(null);
		});
});
