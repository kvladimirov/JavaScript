function solve(input) {
    input = Array.from(input);
    let cord = input.shift();
    console.log(cord);
    // input.pop()
    input = input.map(
        row => row.split(' ').map(Number));
    let sizeMatrix = Array.from(input[0]);
    // let rows = Number(sizeMatrix[0]);
    // let cols = Number(sizeMatrix[1]);
    //
    //
    // let cordPoint = Array.from(matrixInput[1]);
    // let rowPoint = Number(cordPoint[0]);
    // let colPoint = Number(cordPoint[1]);

    // let matrix = [];
    // for (let row = 0; row < input.lenght - 1; row++) {
    //     matrix[row] = Array.from(input[row]);
    //
    // }
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix.length; col++) {
    //         matrix[rowPoint][colPoint] = 1;
    //         if(row != rowPoint || col != colPoint){
    //             matrix[row][col] = Math.max(Math.abs(row - rowPoint), Math.abs(col - colPoint)) + 1;
    //         }
    //     }
    // }
    return input.map(row => row.join(' ')).join('\n');
}
console.log(solve(['0 0',
    '4 4 4 4 4',
    '4 4 4 4 4',
    '4 4 4 4 4']));
// console.log(orbit(['5 5', '2 2']));
// console.log(orbit(['3 3', '2 2']));