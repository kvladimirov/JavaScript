function negativePositiveNumbers(arr) {
    arr = arr.map(Number);
    let result = [];
    for (num of arr)
        if (num < 0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    console.log(result.join('\n'));
}
negativePositiveNumbers(['-3', '0', '-1', '2']);
