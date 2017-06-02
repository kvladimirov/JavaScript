function diagonalAttack(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let firstSum = 0, secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length-row-1];
    }
    if (firstSum == secondSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row != col && col != matrix.length-row-1){
                    matrix[row][col] = secondSum;
                }
            }

        }
        return matrix.map(row => row.join(' ')).join('\n');
    }
    return matrix.map(row => row.join(' ')).join('\n');
}
console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']));
console.log(diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']));
