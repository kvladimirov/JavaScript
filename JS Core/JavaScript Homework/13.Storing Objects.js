"use strict";
function setObjects(arr) {
    let count = parseInt(arr[0]);

    for(let i = 0; i < arr.length; i++){
        let pair = arr[i].split(' -> ');

        console.log("Name: " + pair[0]);
        console.log("Age: " + pair[1]);
        console.log("Grade: " + pair[2]);
    }
}
setObjects(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);
