//partition sort

//takes in an unsorted array, but doesn't sort it
//instead, it finds the point at which every number needs to be compared to (just the first number in the data set)
//take all the values less than that number and send them to the left
//take all the values greater than or equal to it go to the right
//otherwise, they're not sorted -> it's just sending the data either left or right
//ideally, do it in place in the same array

//unshift pushes to the front 
//I think you could just unshift all the values after arr[0], and add 1 to the index each time you do it
//bonus: return the index where the pivot ends up

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

//looking at this now, it would probably be more efficient to just swap the smaller arr[i] with arr[pivotIndex] after line 24 and then increment pivotIndex and that could be the whole swap

console.log(partition([5,4,9,2,5,3]));