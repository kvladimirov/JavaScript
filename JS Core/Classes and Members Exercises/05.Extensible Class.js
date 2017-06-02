let Extensible = (function () {
    let id=0;
    class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(template){
            for(let prop in template){
                if(typeof(template[prop]) == 'function'){
                    Object.getPrototypeOf(this)[prop] = template[prop]
                }else
                {
                    this[prop] = template[prop];
                }
            }
        }
    }

    return Extensible;
})();

let template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'

};

let testObj = new Extensible();
console.log(testObj.id);
testObj.extend(template);
console.log(testObj);
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
