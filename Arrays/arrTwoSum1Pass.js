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
 var twoSum1Pass = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};

 console.log(twoSum1Pass([2,7,11,15], 9));
//onsole.log(twoSum1Pass([3,2,4], 6));
//  console.log(twoSum1Pass([3,3], 6));
//  console.log(twoSum1Pass([2,5,5,11],10))