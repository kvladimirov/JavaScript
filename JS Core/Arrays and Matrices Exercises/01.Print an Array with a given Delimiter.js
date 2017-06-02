function main(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    let result = "";
    result += input[0];
    for (let i = 1; i < input.length; i++){
        result += delimiter + input[i];
    }
    console.log(result);
}
main(['One', 'Two', 'Three', 'Four', 'Five', '-']);