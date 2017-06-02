function triangleOfDollars(input) {
    n = Number(input[0]);
    let line = '';
    for (let i = 1; i <= n; i++){
        line += '$';
        console.log(line);
    }
}
triangleOfDollars(['7']);