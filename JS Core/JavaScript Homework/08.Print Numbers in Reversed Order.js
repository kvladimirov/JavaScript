"use strict";
function reversedNumbers(arr) {
    let numbers;
    numbers = arr;
    for (let i = numbers.length - 1; i >= 0; i--){
        console.log(numbers[i]);
    }
}
reversedNumbers(['10', '15', '20']);
