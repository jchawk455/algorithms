/* A Merge sort uses a "Divide and Conquer" approach.
1) The first step is to find the midpoint.
2) Divide the input array into 2 parts
3) Call the array recusively until it has been reduced to one-element arrays.
4) Then you begin putting them back together(conquer portion) sorting each array as you go
5) Each array it sorted(it only has one element), sort element on the left is compared with the right
6) we keep going int merge process, comparing left to right, until we are left with an array the size 
of the original.  
7) Print the sorted results 
*/
const srtMergeSort = (inputArray) => {
    let inputLength = inputArray.length;
    if (inputLength < 2) 
        return;

    let midIndex = Math.floor(inputLength / 2);
    let leftHalf =  new Array(midIndex);
    let rightHalf = new Array(inputLength - midIndex);

    for ( let i = 0; i < midIndex; i++) {
        leftHalf[i] = inputArray[i];
    }

    for ( let i = midIndex; i < inputLength; i++) {
        rightHalf[i - midIndex] = inputArray[i];
    }

    srtMergeSort(leftHalf);
    srtMergeSort(rightHalf);

    console.log(merge(inputArray, leftHalf, rightHalf));
}

const merge = (inputArray, leftHalf, rightHalf) => {
    let leftSize = leftHalf.length;
    let rightSize = rightHalf.length;

    let i = 0;
    let j = 0;
    let k = 0;
    let m = 0;

    while(i < leftSize && j < rightSize) {
        if(leftHalf[i] <= rightHalf[j]) {
            inputArray[k] = leftHalf[i];
            i++;
        } else {
            inputArray[k] = rightHalf[j];
            j++;
        }
        k++;
    }
    while (i < leftSize) {
        inputArray[k] = leftHalf[i];
        i++;
        k++;
    }
    while (j < rightSize) {
        inputArray[k] = rightHalf[j];
        j++;
        k++;
    }
    return inputArray ;
    // printArray(inputArray);
}

srtMergeSort([34,21,67,8,19,1023, 2, 29, 76]);