function solve(matrixSize) {
    matrixSize = Number(matrixSize);
    let matrix = [];
    for (let row = 0; row < matrixSize; row++) {
        matrix[row] = [];
        for (let col = 0; col <matrixSize; col++) {
            matrix[row][col] = 0;
        }
    }
    let number = 1;

    for (let row = matrixSize - 1; row >= 0; row--)
    {
        let startR = row;
        for (let col = 0; col < matrixSize - startR; col++)
        {
            if (col > matrixSize - 1)
            {
                break;
            }
            matrix[startR + col][col] = number;
            number++;
        }
    }

    for (let row = 1; row < matrixSize; row++)
    {
        let startC = row;
        for (let col = 0; col < matrixSize - startC; col++)
        {
            if (col > matrixSize - 1)
            {
                break;
            }
            matrix[col][startC + col] = number;
            number++;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
solve(['5']);