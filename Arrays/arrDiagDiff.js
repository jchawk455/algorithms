/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

const diagonalDifference = (arr) => {
    let lToR = 0;
    let rToL = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if( i == j ) {
                 console.log(arr[i][j]);
               lToR += arr[i][j];
            }
            if( arr[i].length - j - 1 == i ) {
                console.log(arr[i][j]);
                rToL += arr[i][j];
            }
        }
    }
    return rToL >= lToR ? rToL - lToR : lToR - rToL;
}

data = [[1,2,3,7],[4,5,6,4],[9,8,9,12],[1,2,3,4]];
console.log(diagonalDifference(data));