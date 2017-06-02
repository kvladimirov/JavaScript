function calc(num) {
    let sum = num;

    function add(num2) {
        sum += num2;
        return add;
    }

    add.toString = function() { return sum };
    return add;
}
console.log(calc(1).toString());
console.log(calc(1)(6)(-3).toString());