var runningSum = function(nums) {
    let numSum = 0;

    for ( var i = 0; i < nums.length; i++) {
        numSum += nums[i];
        nums[i] = numSum;
    }

    return nums;
}

console.log(runningSum([1,2,3,4]));