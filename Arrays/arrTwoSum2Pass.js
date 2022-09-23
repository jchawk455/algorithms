/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum2Pass = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });
    console.log(indices);

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];
        console.log(complement, + " " + indices[complement] + " " + index);
        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
};

// console.log(twoSum2Pass([2,7,11,15], 9));
console.log(twoSum2Pass([3,2,4], 6));
//  console.log(twoSum2Pass([3,3], 6));
//  console.log(twoSum2Pass([2,5,5,11],10))