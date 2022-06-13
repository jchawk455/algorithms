//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    length = rightArr.length;
    newRightArr = [];
    for (let i = 0; i < length; i++) {
        shiftedNum = rightArr.shift();
        console.log(shiftedNum);
        newRightArr.push(shiftedNum);
        leftArr.push(shiftedNum);
        //this is the bubble sort logic -- there's definitely a more efficient way to do this, since we know the array is already sorted except for the new value
        isSorted = false;
        while(!isSorted){
            // console.log("sorting left array: " + leftArr)
            isSorted = true;
            for (let j = 0; j <= leftArr.length - 1; j++) {
                if (leftArr[j] > leftArr[j+1]) {
                    var temp = leftArr[j+1];
                    leftArr[j+1] = leftArr[j];
                    leftArr[j] = temp;
                    //if we ever swap anything, we aren't sorted yet and we need to go through the for loop again
                    isSorted = false;
                }
            }
        }
    }
    //combines into left arr, non destructive for rightArr
    rightArr = newRightArr;
    console.log("Left array is: " + leftArr + " and Right array is : " + rightArr)
}

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));