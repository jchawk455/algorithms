//runs through the arr and looks at two adjacent values at a time
//swaps the two adjacent values if the greater one comes first
//loops through the array many times until there is a perfect
//run with no swaps
function bubbleSort(arr){
    var isSorted = false;

    while(!isSorted){
        isSorted = true;
        for(var i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                console.log(`swapping ${arr[i]} because it's bigger than ${arr[i+1]}`);
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                isSorted = false;
            }
        }
    }

    return arr;
}

let arr = [5,4,2,6,8,14,1,3,20,4,-5,24];
// console.log(arr);
// console.log(bubbleSort(arr));

//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for(var start = 0; start < arr.length - 1; start++){
        var mindex = start;
        for(var i = start + 1; i < arr.length; i++){
            if(arr[i] < arr[mindex]){
                mindex = i;
            }
        }
        console.log(`swapping ${arr[start]} with ${arr[mindex]}`);
        var temp = arr[start];
        arr[start] = arr[mindex];
        arr[mindex] = temp;
        // console.log(arr[mindex]);
    }
    return arr;
}

console.log([5,4,2,6,8,14,1,3]);
console.log(selectionSort([5,4,2,6,8,14,1,3]));

/************************************************ */
/* John C & Ben */
//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let iter = i;
        while(arr[iter] < arr[iter-1]) {
            const temp = arr[iter-1];
            arr[iter-1] = arr[iter];
            arr[iter] = temp;
            iter--;
        }
    }
    return arr;

}

console.log(insertionSort([6,4,5,2,8,14,1,3]));
// console.log(insertionSort([1,2,3,5,6,7,4]));

/* William */
const insertionSort = (arr) => {

    // checking if the array has 0 or just 1 
    if (arr.length == 0 || arr.length == 1){
        console.log("Already sorted...")
        return arr
    }

    // set a nested for loop and check if the Index is less than last index
    for (let i = 0; i < arr.length; i++){
        // this loop is gonna be from the current index to back
        for (let g = i; g > 0;g--){
            // if is swap and continue loop back until not be true anymore....
            if(arr[g] < arr[g-1] ){
                let tempIdx = arr[g]
                arr[g] = arr[g-1]
                arr[g-1] = tempIdx
            }
            else{
                break;
            }
        }

    }

    return arr
}

console.log(insertionSort([6]));
console.log(insertionSort([6,4,5,2,8,14,1,3]));
console.log(insertionSort([1,2,3,5,6,7,4]));
console.log(insertionSort([1,2,3,5,6,7,4,22,-1,34,1100,43,345,22423,-12,213,-23,123,-12]));
 
/* Andres and Josh */
const insertionSort = (arr) => {
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            for(var j=0;j<i;j++){
                if(arr[j] > arr[i+1]){
                    var temp = arr[i+1];
                    arr[i+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

// Joel
const insertionSort = (arr) => {
    for(var i = 1; i < arr.length; i++){
        while(arr[i] < arr[i-1]){
            var temp = arr[i];
            arr[i] = arr[i-1]
            arr[i-1] = temp;
            i--
        }
    }
    return arr
}

// Mike
const insertionSort2 = (arr) => {
    for(let i = 0; i < arr.length; ++i){
        for(let j = i; j > 0 && arr[j-1] > arr[j]; --j){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    return arr;
}

console.log(insertionSort2([5,4,2,6,8,14,1,3]));

// William 1 - Combine
//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    // push the rightArr value to leftArr
    for (let i = 0; i < rightArr.length; i++) {
        leftArr.push(rightArr[i]);

        // after each push, sorted the rightArr
        let tempIdx = leftArr.length;
        while (leftArr[tempIdx - 1] < leftArr[tempIdx - 2] || tempIdx === 2) {
            let tempValue = leftArr[tempIdx - 2];
            leftArr[tempIdx - 2] = leftArr[tempIdx - 1];
            leftArr[tempIdx - 1] = tempValue;
            tempIdx--;
        }
    }
    return leftArr;
};

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));

// should return [0,1]
console.log(combine([1], [0]));

// William2 - Combine
/// Aternative loops

//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combinewithAllForLoops = (leftArr, rightArr) => {
    // push the rightArr value to leftArr
    for (let i = 0; i < rightArr.length; i++) {
        leftArr.push(rightArr[i]);

        // after each push, sorted the rightArr
    for (let tempIdx = leftArr.length; leftArr[ tempIdx - 1 ] < leftArr[ tempIdx - 2 ] || tempIdx === 2; tempIdx--) {
            let tempValue = leftArr[tempIdx - 2];
            leftArr[tempIdx - 2] = leftArr[tempIdx - 1];
            leftArr[tempIdx - 1] = tempValue;
        }
    }
    return leftArr;
};

// should return [0,1,2,3,4,6,7,9,11]
console.log("aternative",combinewithAllForLoops([1, 2, 7, 9], [0, 3, 4, 6, 11]));

// should return [0,1]
console.log("aternative",combinewithAllForLoops([1], [0]));

// Ben - Combine
const combine = (leftArr, rightArr) => {
    let newArr = [];
    while(leftArr.length > 0 || rightArr.length > 0) {
        while (leftArr.length === 0 && rightArr.length > 0) {
            newArr.push(rightArr.shift())
        }
        while (rightArr.length === 0 && leftArr.length > 0) {
            newArr.push(leftArr.shift())
        }
        if(leftArr[0] < rightArr[0]) {
            newArr.push(leftArr.shift());
        }
        else if(rightArr[0] < leftArr[0]) {
            newArr.push(rightArr.shift());
        }
        console.log(newArr);
    }
    return newArr;
}

// Andres and Carmen
const combine = (leftArr, rightArr) => {
    let newArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let count = 0;
    while (newArr.length < leftArr.length + rightArr.length) {
        if (leftIndex == leftArr.length) {
            for (var i = rightIndex; i< rightArr.length; i++) {
                newArr.push(rightArr[rightIndex]);
                rightIndex++;
            }
        }
        if (rightIndex == rightArr.length) {
            for (var i = leftIndex; i< leftArr.length; i++) {
                newArr.push(leftArr[leftIndex]);
                leftIndex++;
            }
        }
        if (leftArr[leftIndex] < rightArr[rightIndex] && newArr.length != leftArr.length + rightArr.length){
            newArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else if (leftArr[leftIndex] > rightArr[rightIndex] && newArr.length != leftArr.length + rightArr.length) {
            newArr.push(rightArr[rightIndex]);
            rightIndex++;
        }

    }
    return newArr;
}

