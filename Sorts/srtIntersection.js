//intersect sorted arrays
//given two sorted arrays, return a new array containing all the numbers thye have in common
//this includes duplicates too! the intersection of [2, 2] and [2, 2, 2] would bw [2, 2]

const intersect = (arrLeft, arrRight) => {
    //save left and right arrays because this is gonna be destructive
    savedLeft = arrLeft;
    savedRight = arrRight;
    //create a new array to push stuff into
    newArray = []
    //iterate through the left array
    rightIndex = 0
    for (let i = 0; i < arrLeft.length; i++) {
        //for each value in the left array, look through the whole right array, or until arrLeft[i] gets set to null
        for (let j = rightIndex; j < arrRight.length && arrLeft[i]; j++) {
            //if we reach a value that is equal in both arrays...
            if (arrLeft[i] == arrRight[j]) {
                //push that value into the new array
                newArray.push(arrLeft[i]);
                //set both to null so we don't use them again
                arrLeft[i] = null;
                arrRight[j] = null;
                rightIndex = j;
            }
        }
    }
    //reset the destroyed arrays to their original states
    arrLeft = savedLeft;
    arrRight = savedRight;

    //return the new array
    return newArray;
}

arr1 = [2, 2, 4, 4, 5, 7, 122, 199, 200];
arr2 = [2, 2, 4, 4, 5, 7, 8, 9, 10, 122, 199, 200];

console.log(intersect(arr1, arr2));