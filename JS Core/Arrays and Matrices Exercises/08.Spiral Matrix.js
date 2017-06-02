function generateSpiralMatrix([array]) {
    let endIndex = array.indexOf(' ');
    let rows = Number(array.substring(0, endIndex));
    let cols = Number(array.substring(endIndex, array.length));

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    let index = 1;
    let direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
generateSpiralMatrix(['2 4']);







// function generateSpiralMatrix([n]) {
//     let size = Number(n);
//     let matrix = [], count = 1;
//     for(let i = 0; i < size; i++){
//         matrix[i] = [];
//         for(let j = 0; j < size; j++){
//             matrix[i].push(0);
//         }
//     }
//     let heightStart = 0, heightEnd = size - 1;
//     let widthStart = 0, widthEnd = size - 1;
//     size = Math.ceil(size / 2);
//     while(size--){
//         for(let i = widthStart; i <= widthEnd; i++){
//             matrix[heightStart][i] = count++;
//         }
//         heightStart++;
//         for(let i = heightStart; i <= heightEnd; i++){
//             matrix[i][widthEnd]  = count++;
//         }
//         widthEnd--;
//         for(let i = widthEnd; i >= widthStart; i--){
//             matrix[heightEnd][i] = count++;
//         }
//         heightEnd--;
//         for(let i = heightEnd; i >= heightStart; i--){
//             matrix[i][widthStart]  = count++;
//         }
//         widthStart++;
//     }
//     console.log(matrix.map(r => r.join(' ')).join('\n'));
// }
// generateSpiralMatrix(['5']);
