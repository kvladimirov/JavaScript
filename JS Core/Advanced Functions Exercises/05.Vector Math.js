let vectorMath = (function () {
    function add(a, b) {
        return [a[0] + b[0], a[1] + b[1]]
    }

    function multiply(a, scalar) {
        return [a[0] * scalar, a[1] * scalar]
    }

    function length(a) {
        return Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
    }

    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }

    function cross(a, b) {
        return (a[0] * b[1]) - (a[1] * b[0]);
    }
    return {add, multiply, length, dot, cross};
})();

console.log(vectorMath.add([1,1], [1,0]));
console.log(vectorMath.multiply([3.5, -2], 2));
console.log(vectorMath.length([3, -4]));
console.log(vectorMath.dot([1, 0], [0, -1]));
console.log(vectorMath.cross([3, 7], [1, 0]));