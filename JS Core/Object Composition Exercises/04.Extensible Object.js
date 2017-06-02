function solve() {
    let obj = Object.create({});

    obj.extend = function (template) {

        for(let prop in template){
            obj[prop] = template[prop];
            if(typeof (template[prop]) == "function"){
                Object.getPrototypeOf(obj)[prop] = template[prop];
            }else {
                obj[prop] = template[prop];
            }
        }

    };
console.log(obj);
    return obj;
}
let template = {
    extensionMethod: function () {
        console.log('From etension Method')
    }
};
let obj = solve();
console.log(obj.extend(template));