function sortedList() {
        let numbers = [];

        let getSize = function () {
            //console.log(numbers.length);
            return numbers.length;
        };

        let add = function (num) {
            numbers.push(num);
            //console.log(numbers);
            numbers = numbers.sort((a, b) => a - b);
        };

        let remove = function(index) {
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
                numbers = numbers.sort((a, b) => a - b);
            } else {
                throw new Error;
            }
            //console.log(numbers);
        };

        let get = function (index) {

            if (index >= 0 && index < numbers.length) {
                //console.log(numbers[index]);
                return numbers[index];
            } else {
                throw new Error;
            }

        };

        let obj = {add, remove, get};
        obj.__defineGetter__("size", getSize);
        return obj;

}
let numbers = sortedList();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.remove(0);
numbers.get(4);
numbers.size
