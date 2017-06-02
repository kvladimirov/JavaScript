function orbit(matrixRows) {
    let matrixInput = matrixRows.map(
        row => row.split(' ').map(Number));
    let sizeMatrix = Array.from(matrixInput[0]);
    let rows = Number(sizeMatrix[0]);
    let cols = Number(sizeMatrix[1]);


    let cordPoint = Array.from(matrixInput[1]);
    let rowPoint = Number(cordPoint[0]);
    let colPoint = Number(cordPoint[1]);

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];

        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[rowPoint][colPoint] = 1;
            if(row != rowPoint || col != colPoint){
                matrix[row][col] = Math.max(Math.abs(row - rowPoint), Math.abs(col - colPoint)) + 1;
            }
        }
    }
    return matrix.map(row => row.join(' ')).join('\n');
}
console.log(orbit(['4 4', '0 0']));
console.log(orbit(['5 5', '2 2']));
console.log(orbit(['3 3', '2 2']));