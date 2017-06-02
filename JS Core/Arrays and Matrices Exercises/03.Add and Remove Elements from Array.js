function main(input) {
    let result = [];
    for (let i = 0; i < input.length; i++){
        if(input[i] == 'add'){
            result.push(i + 1);

        }
        else if(input[i] == 'remove'){
            result.pop();
        }
    }
    if (result.length == 0){
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}
main(['add', 'add', 'add', 'add']);
main(['add', 'add', 'remove', 'add', 'add']);
main(['remove', 'remove', 'remove']);