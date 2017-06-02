"use strict";
function setValues(arr) {
    let count = parseInt(arr[0]);
    let numbers = [];
    for (let i = 0; i < count; i++){
      numbers[i] = 0;
    }
    for (let i = 1; i < arr.length; i++){
        let pair = arr[i].split(' - ');
        let index = parseInt(pair[0]);
        let value = parseInt(pair[1]);
        numbers[index] = value;

    }
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }
}
setValues(["3", "0 - 5", "1 – 6", "2 – 7"]);