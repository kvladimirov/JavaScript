"use strict"
function printString (arr) {
    let printString = arr;
    for(let i=0; i <= printString.length-1; i++){
        if(printString[i]=="Stop"){
            break;
        }
        console.log(printString[i]);
    }
}
printString(["Line 1", "Line 2", "Line 3", "Stop"])
