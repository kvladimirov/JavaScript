let expect = require("chai").expect;
let list  = require("../02.Add Delete in List (Unit Testing)").list ;


describe("shared object test", function () {
    it('sadas',function () {
        expect(list.toString()).to.equal('');
    });
    it('sadas',function () {
        list.add(3);
        expect(list.toString()).to.equal('3');
    });

    it('sadas',function () {
        list.add(1);
        list.add('two');
        list.add(3)

        expect(list.toString()).to.equal('1, two, 3');
    });

    it('sadas',function () {

        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.delete(1)).to.equal('two');
        expect(list.toString()).to.equal('1, 3');
    });

    it('sadas',function () {
        expect(list.toString()).to.equal('')
        list.add(5);
        expect(list.delete('0')).to.equal(undefined);
        expect(list.delete(-1)).to.equal(undefined);
        expect(list.delete(3)).to.equal(undefined);
    });

    it('sadas',function () {
        list.add(3);
        list.add('kiro');
        list.delete({name: 'Tapak'});
        expect(list.toString()).to.equal('3, kiro, [object Object]');
    });

    it('sadas',function () {
        expect(typeof list.toString()).to.equal('string');
    });

    it('sadas',function () {
        list.add(5);
        expect(list.delete(0)).to.equal(0);
    });
    
});

