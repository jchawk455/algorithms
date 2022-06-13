//sorting algorithms!
//this week we'll be building algos that take in arrays and sort them
//BUBBLE SORT - this one is not efficient lol

//runs through the arr and looks at two adjacent values at a time
//swaps the two adjacent values if the greater one comes first
//loops through the array many times until there is a perfect
//run with no swaps
function bubbleSort(arr){
    //Loop left to right through the array
        //every loop iteration, check values of arr[i] and arr[i+1]
        //swap if arr[i] > arr[i+i]
    var isSorted = false;
    //as long as it isn't sorted, keep swapping
    while(!isSorted){
        //assume it's sorted to begin with
        isSorted = true;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                //if we ever swap anything, we aren't sorted yet and we need to go through the for loop again
                isSorted = false;
            }
        }
    }
    return arr;
}


//SELECTION SORT

//like bubble sort, but a little more efficient
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for lowest value, then swaps it for value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for (let start = 0; start < arr.length - 1; start++) {
        var mindex = start;
        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] < arr[mindex]) {
                mindex = i;
            }
        }
        //swapping arr[start] with whatever lowest value that we found
        var temp = arr[start];
        arr[start] = arr[mindex];
        arr[mindex] = temp;
    }
    console.log(arr);
}



let arr = [5,4,2,6,8,14,1,3,20,-5,24];
// console.log(arr);
// bubbleSort(arr);
selectionSort(arr);