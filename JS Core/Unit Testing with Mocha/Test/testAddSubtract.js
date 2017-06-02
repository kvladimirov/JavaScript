let expect = require("chai").expect;
let createCalculator  = require("../04.Add Subtract").createCalculator ;
let calculator;
beforeEach(function () {

    calculator = createCalculator();
});
describe("Test calculator createCalculator()", function() {


    it('should have add, subtract, get functions', () => {
        expect(calculator.hasOwnProperty('add')).to.be.true;
        expect(calculator.hasOwnProperty('subtract')).to.be.true;
        expect(calculator.hasOwnProperty('get')).to.be.true;
    });

    it("should return 0 for get", function() {
        let value = calculator.get();
        expect(value).to.be.equal(0);
    });

    it('should return 5 on {add "5";}', () => {
        calculator.add("5"); let value = calculator.get();
        expect(value).to.equal(5);
    });

    it('should return -5 on {subtract 5;}', () => {
        calculator.subtract(5); let value = calculator.get();
        expect(value).to.equal(-5);
    });

    it("should return 5 after {add 3; add 2}", function() {
        calculator.add(3); calculator.add(2); let value = calculator.get();
        expect(value).to.be.equal(5);
    });

    it("should return -5 after {subtract 3; subtract 2}", function() {
        calculator.subtract(3); calculator.subtract(2); let value = calculator.get();
        expect(value).to.be.equal(-5);
    });

    it("should return 4.199999999999999 after {add 5.3; subtract 1.1}", function() {
        calculator.add(5.3); calculator.subtract(1.1); let value = calculator.get();
        expect(value).to.be.equal(5.3 - 1.1);
    });

    it("should return 2 after {add(10); subtract('7'); add('-2'); subtract(-1);}", function() {
        calculator.add(10); calculator.subtract(7); calculator.add(-2); calculator.subtract(-1); let value = calculator.get();
        expect(value).to.be.equal(2);
    });

    it("should return NaN after {add('hello'); }", function() {
        calculator.add('hello'); let value = calculator.get();
        expect(value).to.be.NaN;
    });

    it("should return NaN after {subtract('hello'); }", function() {
        calculator.subtract('hello'); let value = calculator.get();
        expect(value).to.be.NaN;
    });

});