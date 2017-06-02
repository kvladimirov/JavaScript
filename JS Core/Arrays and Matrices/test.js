function solve(matrixSize) {
    matrixSize = Number(matrixSize);
    let matrix = [];
    for (let row = 0; row < matrixSize; row++) {
        matrix[row] = [];
        for (let col = 0; col <matrixSize; col++) {
            matrix[row][col] = 0;
        }
    }
    let current = 0;
    // for (let row = 0; row < matrix.length; row++) {
    //     if(row % 2 == 0) {
    //         for (let col = 0; col < matrix[row].length; col++) {
    //             matrix[col][row] = current + 1;
    //             current = matrix[col][row];
    //         }
    //     }
    //     if (row % 2 == 1) {
    //         for (let col = matrix[row].length - 1; col >= 0; col--) {
    //             matrix[col][row] = current + 1;
    //             current = matrix[col][row];
    //         }
    //     }
    // }
    // for (let row = 0; row < matrix.length; row++) {
    //     if(row % 2 == 0) {
    //         for (let col = matrix[row].length - 1; col >= 0; col--) {
    //             matrix[col][row] = current + 1;
    //             current = matrix[col][row];
    //         }
    //     }
    //     if (row % 2 == 1) {
    //         for (let col = 0; col < matrix[row].length; col++) {
    //             matrix[col][row] = current + 1;
    //             current = matrix[col][row];
    //         }
    //     }
    //
    // }
    // for (let row = 0; row < matrix.length; row++) {
    //     if(row % 2 == 0) {
    //         for (let col = 0; col < matrix[row].length; col++) {
    //             matrix[row][col] = current + 1;
    //             current = matrix[row][col];
    //         }
    //     }
    //     if (row % 2 == 1) {
    //         for (let col = matrix[row].length - 1; col >= 0; col--) {
    //             matrix[row][col] = current + 1;
    //             current = matrix[row][col];
    //         }
    //     }
    // }
    for (let row = 0; row < matrix.length; row++) {
        if(row % 2 == 0) {
            for (let col = matrix[row].length - 1; col >= 0; col--) {
                matrix[row][col] = current + 1;
                current = matrix[row][col];
            }
        }
        if (row % 2 == 1) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] = current + 1;
                current = matrix[row][col];
            }
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
solve(['5'])