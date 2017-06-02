function sortArray(array, method) {
    // let asc = function (a, b) {
    //     return a - b;
    // };
    // let desc = function (a, b) {
    //     return b - a;
    // };

    let sortedMethods = {
        'asc': (a, b) => b - a,
        'desc': (a, b) => a - b
    };
    return array.sort(sortedMethods[method]);

}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));