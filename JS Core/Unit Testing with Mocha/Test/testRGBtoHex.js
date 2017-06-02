let expect = require('chai').expect;
let rgbToHexColor = require("../03.RGB to Hex").rgbToHexColor;

describe("rgbToHexColor(red,green,blue)", function () {
    describe("Nominal cases(valid input)", function () {
        it("should return #FF9EAA for (255, 158, 170)", function () {
            let color = rgbToHexColor(255, 158, 170);
            expect(color).equal("#FF9EAA");
        });

        it("should return #000000 for (0, 0, 0)", function () {
            let color = rgbToHexColor(0, 0, 0);
            expect(color).equal("#000000");
        });

        it("should return #0C0D0E for (12, 13, 14)", function () {
            let color = rgbToHexColor(12, 13, 14);
            expect(color).equal("#0C0D0E");
        });

        it("should return #FFFFFF for (255, 255, 255)", function () {
            let color = rgbToHexColor(255, 255, 255);
            expect(color).equal("#FFFFFF");
        })
    });

    describe("Special cases(invalid input)", function () {
        it("should return undefined for negative red value", function () {
            let color = rgbToHexColor(-1, 255, 255);
            expect(color).equal(undefined);
        });

        it("should return undefined for negative green value", function () {
            let color = rgbToHexColor(255, -1, 255);
            expect(color).equal(undefined);
        });

        it("should return undefined for negative blue value", function () {
            let color = rgbToHexColor(255, 255, -1);
            expect(color).equal(undefined);
        });

        it("should return undefined for too big red value",function () {
            let color = rgbToHexColor(256,255,255);
            expect(color).equal(undefined);
        });

        it("should return undefined for too big green value",function () {
            let color = rgbToHexColor(255,256,255);
            expect(color).equal(undefined);
        });

        it("should return undefined for too big blue value",function () {
            let color = rgbToHexColor(255,255,256);
            expect(color).equal(undefined);
        });

        it("should return undefined for non integer red value", function () {
            let color = rgbToHexColor(13.5,100,100);
            expect(color).equal(undefined);
        });

        it("should return undefined for non integer green value", function () {
            let color = rgbToHexColor(100,13.5,100);
            expect(color).equal(undefined);
        });

        it("should return undefined for non integer blue value", function () {
            let color = rgbToHexColor(100,100,13.5);
            expect(color).equal(undefined);
        });

        it("should return undefined for non number values", function () {
            let color = rgbToHexColor('red',[3],{5:8});
            expect(color).equal(undefined);
        });

        it("should return undefined for missing parameters", function () {
            let color = rgbToHexColor();
            expect(color).equal(undefined);
        })
    })
});