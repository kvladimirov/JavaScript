"use strict";
function setObjects(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let str = arr[i].split(' -> ');
        obj[str[0]] = str[1];
        if(str[0] == "grade"){
            obj[str[0]] = Math.round(parseInt(str[1]));
        }
        if(str[0] == "age"){
            obj[str[0]] = Math.round(parseInt(str[1]));
        }
    }
    console.log(JSON.stringify(obj));
}
setObjects(['name -> Angel',
'surname -> Georgiev',
'age -> 20',
'grade -> 6.00',
'date -> 23/05/1995',
'town -> Sofia']);
