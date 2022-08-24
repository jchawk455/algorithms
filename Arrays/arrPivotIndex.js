var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    currPivot = 0;

    for(let i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }
    if (rightSum == 0)
        return 0;
    

    for(let i = 1; i < nums.length; i++) {
        leftSum += nums[i-1];
        rightSum -= nums[i];
         if(leftSum == rightSum)
            return i;
    }
    if(leftSum = 0)
        return nums.length - 1

return -1;
}
console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
console.log(pivotIndex([1,-1,7]));
