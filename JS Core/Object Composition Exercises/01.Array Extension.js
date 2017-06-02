let arrayExtension = (function () {

    Array.prototype.last = function () {
         return this[this.length - 1]
    };

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += Number(this[i]);
        }
        return result;
    };

    Array.prototype.average = function () {
        let sum = this.sum();

        return sum / this.length;
    };

})();
let myArr = [1, 2, 3];
console.log(myArr.skip(1)[0]);
console.log(myArr.last());
console.log(myArr.take(2)[0]);
console.log(myArr.take(2)[1]);
console.log(myArr.sum());
console.log(myArr.average());