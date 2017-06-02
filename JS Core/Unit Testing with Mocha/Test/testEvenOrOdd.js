let expect = require("chai").expect;
let isOddOrEven = require("../01.Even Or Odd").isOddOrEven;

describe("isOddOrEven", function() {
    it("with a number parameter, should return undefined", function() {
        expect(isOddOrEven(13)).to.equal(undefined, "Function");
    });

    it("with a object parameter, should return undefined", function() {
        expect(isOddOrEven({name: "pesho"})).to.equal(undefined);
    });

    it("with an even length string, should return correct result", function() {
        expect(isOddOrEven("roar")).to.equal("even");
    });

    it("with an odd length string, should return correct result", function() {
        expect(isOddOrEven("pesho")).to.equal("odd");
    });
});