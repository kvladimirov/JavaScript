class Rat {
    constructor(name) {
        this.name = name;
        this.united = [];
    }

    unite(otherRat) {
        if (otherRat.constructor.name == this.constructor.name) {
            this.united.push(otherRat);
        }
    };

    getRats() {
        return this.united;
    }

    toString() {
        let result = this.name;
        for (let x of this.united) {
            result += `\n##${x.name}`
        }
        return result;
    }
}
let obj = new Rat('Kosyo');
let obj1 = new Rat('Bosyo');
let obj2 = new Rat('Pesho');
let obj3 = new Rat('Joro');
obj.unite(obj1);
obj.unite(obj2);
obj.unite(obj3);
console.log(obj.getRats());
console.log(obj.toString());