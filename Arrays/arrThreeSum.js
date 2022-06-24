//DESCRIPTION
//Given an array and a target value, return true if there is a triplet 
//in the array whose sum is equal to the given value. Otherwise return false.

function threeSum(arr, target){
    
    for(let i = 0; i < arr.length-2; i++) {
        for(let j = i + 1; j < arr.length - 1; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if((arr[i] + arr[j] + arr[k]) == target) {
                    console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                    return true;
                }
            }
        }
    }
    return false;
}

//TESTS
console.log(threeSum([12, 3, 4, 1, 6, 9], 24)) 
//Output: true (12, 3, 9)

console.log(threeSum([1, 2, 3, 4, 5], 9))
//Output: true (5, 3, 1)

console.log(threeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5))
//Output: false