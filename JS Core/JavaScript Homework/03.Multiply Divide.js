"use strict";
function multiply(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let multiply = 0;
    multiply = num1 <= num2 ? num1 * num2 : num1 / num2;
    console.log(multiply);
}
multiply(['3', '2']);