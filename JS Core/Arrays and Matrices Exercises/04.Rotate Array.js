function rotate(input) {
    let rotate = input[input.length - 1];
    input.pop();
    for (let i = 0; i < rotate % input.length; i++) {
        input.unshift(input.pop());
    } //rotate on right
    // for (let i = 0; i < rotate % input.length; i++) {
    //     input.push(input.shift());
    // } rotate on left
    console.log(input.join(' '));
}
rotate(['1', '2', '3', '4', '9']);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

