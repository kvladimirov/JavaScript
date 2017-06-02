function extendPrototype(Person) {
    Person.prototype.species = "Human";
    Person.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

//extendPrototype.call(Student.prototype);
let s = new Student("Ana", "ana@mail.ru", 3);
console.log(s.toSpeciesString());