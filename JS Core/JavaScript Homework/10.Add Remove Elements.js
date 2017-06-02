"use strict"
function addRemove (arr) {
    let numbers=[];
    for(let i = 0; i< arr.length ;i++) {
        let pair = arr[i].split(' ');

        let command = pair[0];
        let number = Number(pair[1]);

        if (command == "add") {
            numbers.push(number);
        }
        else {
            numbers.splice(number, 1);
        }
    }
    for(let num of numbers){
        console.log(num)
    }
}
addRemove(["add 3",
    "add 5",
    "add 7"
])
