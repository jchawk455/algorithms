// From CodeSignal Arcade Edge Of the Ocean
const matrixElementsSum = (matrix) => {
    let sum = 0;
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(i == 0 || (i > 0 && matrix[i-1][j] > 0)) {
                sum += matrix[i][j];
            }
            else 
                matrix[i][j] = 0;
        }
    }
    return(sum);
}

console.log(matrixElementsSum([
    [0, 1, 1, 2],
    [1, 5, 0, 0],
    [2, 1, 3, 3]]
))