"use strict";
function setObjects(arr) {
    for(let i = 0; i < arr.length; i++){
        let str = arr[i];
        let obj = JSON.parse(str);
        console.log("Name: " + obj.name);
        console.log("Age: " + obj.age);
        console.log("Date: " + obj.date);


    }
}
setObjects(['{"name":"Gosho","age":"10","date":"19/06/2005"}',
'{"name":"Tosho","age":"11","date":"04/04/2005"}']);

