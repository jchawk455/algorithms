// Josh
const partition = (arr) => {
    if (arr.length <= 1) {
        console.log("there's nothing to partition, this array is too small")
    } else {
        //save the pivot index
        var pivotIndex = 0;
        //start by looking at the next number after the pivot index
        for (let i = 1; i < arr.length; i++) {
            //if that number is smaller than the pivot index...
            if (arr[i] < arr[pivotIndex]) {
                //shift everything over to replace it, pushing the smaller value to the end
                for (let j = i; j < arr.length - 1; j++) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                //pop the smaller value from the end and splice it to the front of the array
                arr.splice(0, 0, arr.pop());
                //and increase the pivotIndex accordingly
                pivotIndex++;
            }
        }
        console.log(arr);
        return pivotIndex;
    }
}

console.log(partition([5,4,9,2,5,3]));

// Daniel
//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {
    // var randomIndex = Math.floor((Math.random())*arr.length);
    // console.log(arr[randomIndex]);
    let newArr =[]
    let pivot = arr[0];
    newArr.push(pivot)
    let pivotLoc = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot) {
            newArr.unshift(arr[i])
            pivotLoc++

        }
        else{
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
    return pivotLoc;
}

// expected return [4,2,3,5,5,9,5]
let arr = [5,4,9,2,5,3];
let arrTwo = [7, 4];
let arrThree = [3, 5, 1, 2, 4];
let arrFour = [7, 2, 10, 15, 1];
console.log(partition(arr));
console.log(partition(arrTwo));
console.log(partition(arrThree));

const partition = (arr) => {
    console.log(arr);
    let pivi = 0;
    for(var i = 1; i < arr.length; i++){
        if (arr[i] < arr[pivi]){
            console.log(`trying to move ${arr[i]} back`);
            let tempi = i;
            while(tempi > pivi){
                console.log(`swapping ${arr[tempi]} with ${arr[tempi - 1]}`);
                let temp = arr[tempi];
                arr[tempi] = arr[tempi - 1];
                arr[tempi - 1] = temp;
                tempi--;
            }
            pivi++;
            console.log(arr);
        }
    }
    return arr;
}

// Ben
const partition = (arr) => {
    pivot = arr[0];
    let pIdx = 0;
    for( let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            let mover = i;
            while(mover > pIdx) {
                const temp = arr[mover-1];
                arr[mover-1] = arr[mover];
                arr[mover] = temp;
                mover--;
            }
            pIdx++;
        }
    }
    console.log(arr);
    return pIdx;
}

// Mike
//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

// Erikur
const partition = (arr) => {

    let pivot = arr[0];
    // newArr.push(pivot)
    let pivotLoc = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot && i > pivotLoc) {
            arr.unshift(arr.splice(i, 1)[0])
            pivotLoc++
        }
        else if( i < pivotLoc && arr[i] >=pivot){
            arr.push(arr.splice(i,1)[0]);
            i--;
        }
    }
    // console.log(arr)
    return pivotLoc;
}


const quickSort = (arr) => {
    if(arr.length <= 0){
        return arr;
    }
    let pivotVal = arr[0];
    const pivotIdx = partition(arr)
    // console.log("^Partition^\n");
    let left = arr.slice(0, pivotIdx)
    let right = arr.slice(pivotIdx+1)

    // console.log(left);
    // console.log(right);
    // console.log("^Left & Right^\n");
    left = quickSort(left);
    right = quickSort(right);

    // console.log(left);
    // console.log(right);
    // console.log("^Left & Right: Post QuickSort^\n");
    left.push(pivotVal);
    arr = left.concat(right);

    // console.log(arr)
    // console.log("^Returning^\n");
    return arr;
}
console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]))
console.log(quickSort([1,8,30,5,70,40,60,80,40,50,70,8,7,2,4,6,0,456,82,74,24,0,1,2,3,58,9001]))


// Ben
const quickSort = (arr) => {
    if(arr.length < 2) return arr; // returns if the arr length is less than 2
    else{
        console.log("Pre-Partition", arr); // Logs arr state pre partition
        let pivot = partition(arr); // Calls Partition on arr
        console.log("Post-Partition", arr); // Logs arr state post partition
        let left = arr.slice(0, pivot); // create new array up to pivot exclusive
        let right = arr.slice(pivot+1, arr.length); // creates new array from after pivot to end
        let middle=[arr[pivot]] // creates new array with only the pivot value
        console.log("Left:", left); // Logs left side pre-recursive call
        console.log("Right:", right); // Logs Right side pre-recursive call
        quickSort(left); // Recursive call on only left
        quickSort(right); // Recursive call on only right
        arr = left.concat(middle.concat(right)) // Concat right onto pivot and pivot+right onto left
    }
    return arr; // returns concatenated arr
}

// William
//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < pivot) {
            ++pivi;
            for (let j = i - 1; j >= 0; --j) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return pivi;
};

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = partition(arr);
    const left = arr.slice(0,pivot);
    const right = arr.slice(pivot+1);
    return [...quickSort(left), arr[pivot], ...quickSort(right)];

};

console.log(
    quickSort([7, 45, 2, 67, 3, 2, 1, 6, 4, 5, 2, 8, 14, 1, 3, 82, 90, -1, 0])
);

// Antoine
function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(nums, left = 0, right = nums.length - 1) {
    if (nums.length > 1) {
        let index = partition(nums, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(nums, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(nums, index, right);
        }
    }
    return nums;
}
// first call to quick sort
let nums = [1, 5, 3, 7, 6, 2, 9, 4, 8];
let sortedArray = quickSort(nums);
console.log(sortedArray); //prints [2,3,5,6,7,9]
 
// Mike
const quickSort = (arr) => {
    // console.log(arr);
    if(arr.length < 2) return arr;

    const pivi = partition(arr);

    console.log(`partition: ${arr}`);
    let leftHalf = arr.slice(0,pivi);
    let rightHalf = arr.slice(pivi + 1);
    
    leftHalf = quickSort(leftHalf);
    rightHalf = quickSort(rightHalf);
    // console.log(`left after recursion: ${leftHalf}`);
    // console.log(`right after recursion: ${rightHalf}`);

    let combine = [...leftHalf, arr[pivi], ...rightHalf];
    console.log(`combine: ${combine}`);

    return combine;
}

console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));
const partition = (arr, left, right) => {
    let pivot = arr[left];
    let pointer = left;

    for(let i = left; i <= right; ++i){
        if(arr[i] < pivot){
            ++pointer;
            [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
        }
    }
    [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
    return pointer;
}

const quickSort = (arr) => {
    const internalQS = (arr, left, right) => {
        if(right - left <= 1) return;
        let pivi = partition(arr, left, right);
        internalQS(arr, left, pivi - 1);
        internalQS(arr, pivi + 1, right);
    }
    return internalQS(arr, 0 , arr.length - 1);
}

let testArr = [6,2,10,23,-18,0,4,3,11,6];
// console.log(partition(testArr, 0, testArr.length));
quickSort(testArr);
console.log(testArr);

