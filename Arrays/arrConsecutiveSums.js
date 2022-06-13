// You are given a list of integers. Find all the consecutive sets of
// integers that adds up to the sum passed in as one of the imputs.


//edge case-- this doens't work with negative numbers all the time, because the consition on 16 might break that for loop too early if a negative number would bring a larger number back down to the targetSum
const findConsecutiveSums = (nums, targetSum) => {
    //create an empty array to return -> any arrays generated that meet the criteria will get pushed into this array
    var sumArrays = []
    //loop through nums
    for (let i = 0; i < nums.length; i++) {
        var sum = 0;
        var counter = 0 + i;
        //hold on to each starting value (i) and use new for loop (j) to add all following values to it
        //if at any point the sum is greater than the target sum, or we reach the end of the nums array, break out of the loop
        //use a counter to remember how many numbers were added to i to reach the target sum
        for (let j = i; j < nums.length && sum <= targetSum; j++) {
            sum += nums[j];
            counter++;
            //if sum is equal to target sum...
            if (sum == targetSum) {
                //create a new array
                var newArray = []
                //and use another for loop: sentry starts looking through nums at wherever i started. push values into the new array, using the counter as the condition to stop pushing once they equal the target value
                for (let k = i; k < counter; k++) {
                    newArray.push(nums[k])
                }
                //and now push the new array into sumArrays
                sumArrays.push(newArray);
            }
        }
    }
    return sumArrays;
}

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1, sum1));

// const expected1 = [
//     [2, 5, 3, 6],
//     [3, 6, 7]
// ]

//if the target sum is never found, it should return an empty array

const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2,sum2));
// const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3,sum3));
// const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
console.log(findConsecutiveSums(nums4,sum4));
// const expected4 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ];