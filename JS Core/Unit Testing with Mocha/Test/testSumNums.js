let expect = require("chai").expect;
let sum = require("../01.Sum of Numbers").sum;

describe("sum(arr) - sum array of numbers", function() {
    it("should return 3 for [1, 2]", function() {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 0 for empty array", function() {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 1 for [1]", function() {
        let expectedSum = 1;
        let actualSum = sum([1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 3 for [1.5, 2.5, -1]", function() {
        let expectedSum = 3;
        let actualSum = sum([1.5, 2.5, -1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});