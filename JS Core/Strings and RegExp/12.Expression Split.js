function expressionSplit(input) {
    let expression = input[0];
    let elements = expression.split(/[\s();,]+/)
        .filter(x => x != '');
    console.log(elements.join("\n"));
}

expressionSplit(['let sum = 4 * 4,b = "wow";']);