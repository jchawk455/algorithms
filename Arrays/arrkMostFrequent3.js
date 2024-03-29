/*
* Returns the k most frequently occurring numbers from the given unordered
* nums array. Order in the return array should be highest frequecy first, 
* ordered to lowest frequency. If two or more numbers match frequency, the
* order they appear in the array does not matter.
*/
var map = new Map();
const kMostFrequent = (nums, k) => {
    for(var i = 0; i < nums.length; i++) {
        // look up key is key is not there, addit else increment value by 1
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        }
        else map.set(nums[i], 1);
    }
    const keys = [...map.keys()];
    const values = [...map.values()];
    console.log(keys,values);
    var entries = map.entries();
    console.log(entries);
}
const nums4 = [5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5];
// const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(kMostFrequent(nums4,k1));
// const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
console.log(kMostFrequent(nums2,k2));
// const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
console.log(kMostFrequent(nums3,k3));
// const expected3 = [1, 2, 3];

// const nums4 = [5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5];
const k4 = 4;
console.log(kMostFrequent(nums4,k4));
// const expected3 = [5, 2, 0];