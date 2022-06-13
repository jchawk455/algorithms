/* Return the k most frequently occuring numbers from the given unordered nums array */

// const kMostFrequent = (nums, k) => {
//     //create empty array to return most frequently occurring nums
//     var mostFrequentNums = [];
//     var map = {};
//     //nested for loop through nums
//     //outer for loop holds on to nums[i] 
//     for (let i = 0; i < nums.length; i++) {
//         //inner for loop checks how many times it occurs in nums
//         var frequencyCounter = 0;
//         var hasKey = nums[i] in map;
//         if (!hasKey) {
//             for (let j = i; j < nums.length; j++) {
//                 if (nums[i] == nums[j]) {
//                     frequencyCounter++;
//                 }
//             }
//             console.log(map);
//             map[nums[i]] = (nums[i], frequencyCounter);
//         }
//     }
//     //now gonna push the largest k values into mostFrequentNums
//     //gotta do it k number of times
//     for (let i = 0; i < k; i++) {
//         //which array in map has greatest [1] index? that becomes the num to push
//         console.log("here's the map: ")
//         console.log(map);
//         var frequentVal
//         console.log("Frequent val is: ")
//         console.log(frequentVal);
//         for (key in map) {
//             //find most frequent value (largest value from all key/value pairs)
//             if (map.key > parseInt(frequentVal)) {
//                 frequentVal = key;
//             }
//         }
//         //push it into mostFrequentNums
//         //remove it from map
//         // mostFrequentNums.push(parseInt(numToPush));
//         // map.splice(indexToSlice, 1);
//     }
//     return mostFrequentNums;
// }


//====================
//SOLUTIONS
//====================

const kMostFrequent = (nums, k) => {
    let output = [];
    let tracker = {};
    for (let i = 0; i < nums.length; i++) {
        if(!tracker[nums[i]]){
            tracker[nums[i]] = 1;
            for (let j = i+1; j < nums.length; j++) {
                if(nums[j] === nums[i]) tracker[nums[i]]++;
            }
        }
    }
    console.log(tracker);
    for (let l = 0; l < k; l++) {
        let currentLargest = Object.keys(tracker)[0];
        for (const key in tracker) {
            if(tracker[key] > tracker[currentLargest]){
                currentLargest = key;
            }
        }
        tracker[currentLargest] = 0;
        output.push(currentLargest)
    }
    return output;
}

//====================

const kMostFrequent2 = (nums, k) => {
    let unSorted = [];
    let newArr = [];
    let dupes = {};
    let count = 0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i] in dupes) {
            //console.log(nums[i] + " Duplicate");
            dupes[nums[i]] = dupes[nums[i]] + 1;
        } else {
            dupes[nums[i]] = 1;
        }
    }
   // console.log(dupes)
    for (let dupe in dupes) {
        unSorted.push([parseInt(dupe), dupes[dupe]])
    }

    unSorted.sort((a, b) => {
        return b[1] - a[1];
    })

    //console.log(unSorted);

    for (let item in unSorted) {
        if (count < k) {
            newArr.push(unSorted[item][0]);
            count++;
        }
    }
    
    return newArr;

}

console.log()

const nums1 = [1, 1, 2, 1, 1, 2, 3]
const k1 = 2
console.log(kMostFrequent(nums1, k1));