function extractVariableName([text]) {
    let result =[];
    let pattern = `\\b_([a-zA-Z0-9]+)\\b`;
    let regex = new RegExp(pattern,'g');

    let match = regex.exec(text);
    while(match){
        result.push(match[1]);
        match = regex.exec(text);
    }

    return result.join(',');
}

console.log(extractVariableName(['The _id and _age variables are both integers.']));
console.log(extractVariableName(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']));
console.log(extractVariableName(['Calculate the _area of the _perfectRectangle object.']));
