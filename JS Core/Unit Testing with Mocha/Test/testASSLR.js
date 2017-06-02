let expect = require("chai").expect;
let createList = require("../list-add-swap-shift-left-right").createList;


describe("createList()", function() {
    let list;
    beforeEach('init the object', function () {
        list = createList();
    });

    it('test', () => {
        expect(list.hasOwnProperty('add')).to.be.true;
        expect(list.hasOwnProperty('shiftLeft')).to.be.true;
        expect(list.hasOwnProperty('shiftRight')).to.be.true;
        expect(list.hasOwnProperty('swap')).to.be.true;
        expect(list.hasOwnProperty('toString')).to.be.true;
    });

    it("test", function() {

        list.add(1);
        list.add("two");
        list.add(3);
        expect(list.toString()).to.be.equal('1, two, 3');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        expect(list.toString()).to.be.equal('two, 3, 1');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftRight();
        expect(list.toString()).to.be.equal('3, 1, two');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add("four");
        expect(list.toString()).to.be.equal('two, 3, 1, four');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add("four");
        list.shiftRight();
        expect(list.toString()).to.be.equal('four, two, 3, 1');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add("four");
        list.shiftRight();
        list.swap(0,3);
        expect(list.toString()).to.be.equal('1, two, 3, four');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add("four");
        list.shiftRight();
        list.swap(0,3);
        list.swap(1,1);
        expect(list.toString()).to.be.equal('1, two, 3, four');
    });

    it("test", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.add("four");
        list.swap('pesho','gosho');
        expect(list.toString()).to.be.equal('1, two, 3, four');
    });

});