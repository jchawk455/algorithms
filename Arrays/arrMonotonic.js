/*
DESCRIPTION:
Given an array on integers, write a function that will return true or false depending on if the 
array is monotonic.

-Monotonic means either the array is in increasing order or in decreasing order
-Empty arrays or arrays with just one element are also monotonic

*/

// set up a function that takes in an array of integers
// set up a flag for whether ascending, descending, or neutral
// set up a diff variable to store diff between i and i + 1
// check if array length < 2 and if so return true
// start loop thru the array
// compare i to i + 1 and store in sum
// if order_flag == 'n' and i < i+1 set order_flag to 'a'
// if order_flag == 'n' and i > i + 1 set order_flag to 'd'
// if order_flag == 'n' and i == i + 1 just keep going without setting flag
// if order_flag == 'a' and i < i + 1 return false
// if order_flag == 'd  and i > i + 1 return false

// if you get to the end of the loop, return true

const isMonotonic = (inputArray) => {
    let orderFlag = 'n';

    if(inputArray.length < 2) {
        return true;
    }
    for(i = 0; i < inputArray.length; i++) {
        if (orderFlag == 'n' && (inputArray[i+1] > inputArray[i])) {
            orderFlag = 'a';
        }
        else if 
            (orderFlag == 'n' && (inputArray[i+1] < inputArray[i])) {
                orderFlag = 'd';
        }
        if (orderFlag == 'a' && (inputArray[i+1] < inputArray[i])) {
            return false;
        }
        if (orderFlag == 'd' && (inputArray[i+1] > inputArray[i])) {
            return false;
        }
    } 
    return true;
} 

console.log(isMonotonic([1, 2, 2, 3, 6, 8, 13, 13, 15, 22, 54]));
console.log(isMonotonic([6]));
console.log(isMonotonic([]))
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]));
console.log(isMonotonic([1, 2, 2, 1, 3, 6, 8, 13, 12, 15]));
console.log(isMonotonic([1,1,1,1,1,1]));
console.log(isMonotonic([1,1,1,1,1,1,2,2,2,2]));
console.log(isMonotonic([2,2,2,2,0,0,0, 1]));
console.log(isMonotonic([2,2,2,2,0,0,0,-1]));
