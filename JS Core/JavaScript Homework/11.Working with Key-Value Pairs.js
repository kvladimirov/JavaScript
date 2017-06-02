function addRemove(arr) {
    "use strict"
    let numbers = [];

    let comand;
    let number;
    for (let i = 0; i < arr.length - 1; i++) {
        let pair = arr[i].split(' ');
        comand = pair[0];
        number = pair[1];
        numbers[comand]=number
    }
    let key = arr[arr.length-1]

    if(numbers[key] == undefined){
        console.log("None")
    }
    else(
        console.log(numbers[key]))


    // if (comand == key)
    //     console.log(comand)
}
addRemove(['3 bla',
    '3 alb',
    '2'
])
