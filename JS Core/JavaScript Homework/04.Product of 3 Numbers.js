"use strict";
function productOf3Numbers(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);
    let productOf3Numbers = num1*num2*num3;
    if (productOf3Numbers >= 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }

}
productOf3Numbers(['3', '2', '1']);
