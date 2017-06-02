let expect = require("chai").expect;
let mathEnforcer = require("../03.Math Enforcer").mathEnforcer;

describe("mathEnforcer", function() {
    describe("addFive", function() {
        it("with a non-number parameter, should return correct result", function () {
            expect(mathEnforcer.addFive("pesho")).to.equal(undefined);
        });
        it("with a negative value, should return correct result", function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it("with a positive value, should return correct result", function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it("with a floating point  number, should return correct result", function () {
            expect(mathEnforcer.addFive(5.2)).to.equal(5.2+5);
        });
    });
    describe("subtractTen", function() {
        it("with a non-number parameter, should return correct result", function () {
            expect(mathEnforcer.subtractTen("pesho")).to.equal(undefined);
        });

        it("with a positive value, should return correct result", function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });

        it("with a negative value, should return correct result", function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });

        it("with a floating point  number, should return correct result", function () {
            expect(mathEnforcer.subtractTen(5.2)).to.equal(5.2-10);
        });

    });
    describe("sum", function() {
        it("with a non-number parameter, should return correct result", function () {
            expect(mathEnforcer.sum("pesho", "gosho")).to.equal(undefined);
        });
        it("with a negative values, should return correct result", function () {
            expect(mathEnforcer.sum(-5, -1)).to.equal(-6);
        });

        it("with a positive values, should return correct result", function () {
            expect(mathEnforcer.sum(5, 1)).to.equal(6);
        });

        it("with a positive and negative value, should return correct result", function () {
            expect(mathEnforcer.sum(-5, 1)).to.equal(-4);
        });

        it("with a floating point  numbers, should return correct result", function () {
            expect(mathEnforcer.sum(5.2, 1.1)).to.equal(5.2+1.1);
        });
        it("with a string and number value, should return correct result", function() {
            expect(mathEnforcer.sum('pesho',5)).to.be.equal(undefined);
        });

        it("with a number and string value, should return correct result", function() {
            expect(mathEnforcer.sum(5,'pesho')).to.be.equal(undefined);
        });
    });

});