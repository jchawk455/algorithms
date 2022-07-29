//DESCRIPTION 
//Given a sorted array and a number x, find the pair of numbers in the array whose sum is closest to x

/* 1) create variables to hold the current closest pair as well as for the current and new diff 
** 2) create a for loop and nested for loop.  Initialize j in the inner loop to i + 1
** 3) In the inner loop, caluclate the difference between the sum of the pairs and the value passed in
** 4) If the latest calulate differnce is less than the previous difference, replace it
** 5) Return the pairs producing the lowest difference
*/
function closestSum(arr,  x) {
    let closestPair = [];
    let diff = Number.MAX_SAFE_INTEGER;
    let newDiff = 0;

    for(let i=0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            newDiff = x - (arr[i] + arr[j]);
            if(newDiff < 0 )
                newDiff = newDiff * -1;
             
            if ( newDiff < diff) {
                closestPair[0] = arr[i];
                closestPair[1] = arr[j];
                diff = newDiff;
            }
        }
    }
    return closestPair;

}

//TESTS
console.log(closestSum([10, 22, 28, 29, 30, 40], 54))
//Output: 22 and 30

console.log(closestSum([1, 3, 4, 7, 10], 15))
//Output: 4 and 10

console.log(closestSum([1,7,23,94, 44, 64, 95, 2], 100))