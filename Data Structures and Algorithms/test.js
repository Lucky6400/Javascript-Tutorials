// function transpose(matrix) {
//     const m = matrix.length;
//     const n = matrix[0].length;

//     // Swap elements in-place between rows and columns
//     for (let i = 0; i < m; i++) {
//         [matrix[i][i+1], matrix[i+1][i]] = [matrix[i+1][i], matrix[i][i+1]]; 
//     }

//     return matrix;
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const transposedMatrix = transpose(matrix);
// console.log(transposedMatrix);

let numRows = 6;
let arr = [[1]];
let count = 1;
for (let i = 1; i < numRows; i++) {
    count = count * 11;
    let newarr = []
    let str = count.toString()
    for (let j = 0; j < str.length; j++) {
        newarr.push(parseInt(str[j]))
    }
    arr.push([newarr]);
}

console.log(arr)