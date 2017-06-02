function main(input) {
    let step = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < input.length; i+=step){
        console.log(input[i]);
    }
}
main(['5', '20', '31', '4', '20', '2']);
main(['1', '2', '3', '4', '5', '6']);