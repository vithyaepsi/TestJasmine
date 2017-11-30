const calculatrice = require('../src/calc.js');
 
describe('Test of function calculatrice', () => {
	it('is a function', () => {
		expect(typeof calculatrice).toBe('function');
	});
});
