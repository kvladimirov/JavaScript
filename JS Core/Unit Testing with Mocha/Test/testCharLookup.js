let expect = require("chai").expect;
let lookupChar = require("../02.Char Lookup").lookupChar;

describe("lookupChar", function() {
    it("with a non-string first parameter, should return undefined", function() {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });

    it("with a non-number second parameter, should return undefined", function() {
        expect(lookupChar("pesho", "gosho")).to.equal(undefined);
    });

    it("with a floating point number second parameter, should return undefined", function() {
        expect(lookupChar("pesho", 3.12)).to.equal(undefined);
    });

    it("with an incorrect index value, should return incorrect index", function() {
        expect(lookupChar("pesho", 13)).to.equal("Incorrect index");
    });

    it("with a negative index value, should return incorrect index", function() {
        expect(lookupChar("pesho", -1)).to.equal("Incorrect index");
    });

    it("with an index value equal to string length, should return incorrect index", function() {
        expect(lookupChar("pesho", 5)).to.equal("Incorrect index");
    });
    it("with correct parameter, should return correct value", function() {
        expect(lookupChar("pesho", 0)).to.equal("p");
    });

    it("with correct parameter, should return correct value", function() {
        expect(lookupChar("pesho", 4)).to.equal("o");
    });
});