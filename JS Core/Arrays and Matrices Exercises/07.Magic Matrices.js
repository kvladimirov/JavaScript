// function magicMatrix(matrixRows) {
//     let matrix = matrixRows.map(
//         row => row.split(' ').map(Number));
//     let sumRow = 0;
//     for (let row = 0; row < matrix.length; row++) {
//         let currentSumRow = 0;
//         for (let col = 0; col < matrix[row].length; col++){
//             if(row == 0){
//                 sumRow += matrix[row][col];
//             }
//             else {
//                 currentSumRow += matrix[row][col];
//             }
//         }
//         if (sumRow != currentSumRow && row > 0){
//             return 'false';
//         }
//     }
//
//     for (let col = 0; col < matrix.length; col++) {
//         let currentSumCol = matrix[0][col];
//         for (let row = 0; row < matrix[col].length - 1; row++){
//             currentSumCol += matrix[row + 1][col];
//
//         }
//         if (sumRow != currentSumCol){
//             return 'false';
//         }
//     }
//     console.log(matrix.map(row => row.join(' ')).join('\n'));
//     return 'true';
//
// }


function magicMatrix(input) {
    let matrixInput = input.map(row => row.split(' ').map(Number));

    let sum = function(matrixInput) {
        return matrixInput.reduce(function (a, b) {
            return a + b;
        }, 0);
    };
    let sumsRows = matrixInput.map(sum);
    let sumsCols = matrixInput.map((row, i) => sum(matrixInput.map(row => row[i])));
console.log(sumsCols)
    console.log(sumsRows)
    for(let row of sumsRows){
        for(let col of sumsCols){
            if(row != col){
                return 'false';
            }
        }
    }
    return 'true';
}

console.log(magicMatrix(['4 5 6',
    '6 5 4',
    '5 5 5']));
console.log(magicMatrix(['11 32 45',
    '21 0 1',
    '21 1 1']));
console.log(magicMatrix(['0 1 0',
    '0 0 1',
    '1 0']));