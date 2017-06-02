"use strict";

function multipleKeyValue(args) {
    let arr = [];
    let someKey = args[args.length - 1];
    for (let i = 0; i < args.length - 1; i++){
        let pair = args[i].split(' ');
        let key = pair[0];
        let value = pair[1];
        arr[key] = value;
        if (someKey == key){
            console.log(arr[key]);
        }
    }

    if (someKey in arr){

    }
    else console.log("None");


}

multipleKeyValue(['key value',
    'key eulav',
    'test value',
    'my'])
