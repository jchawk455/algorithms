//Union sorted arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built-in functions
//it's the intersection PLUS each side with its unique numbers. intersections appear only once -> if both arrays have the same number, it only gets listed once in the new array. if an array has [2. 2, 2] and another have [2, 2], we'll have 3 -> pick the amount from the array that has more

const union = (arrLeft, arrRight) => {
    //this gets destructive so saving the arrays now and then we can reset them to their original states
    var savedLeft = arrLeft;
    var savedRight = arrRight;
    var newArray = [];
    //push everything from the left array into the new array
    for (let i = 0; i < arrLeft.length; i++) {
        newArray.push(arrLeft[i]);
        // console.log[newArray];
        //if there's a duplicate value in the right array, set it to null so we don't use it later
        for (let j = 0; j < arrRight.length && arrLeft[i]; j++) {
            if (arrLeft[i] == arrRight[j]) {
                //i don't REALLY need to set the left values to Null here, but it saves a little time because whether or not the left value exists is part of the consition for the for loop. so as soon as it gets set to null, we exit this for loop. could also use a boolean instead!
                arrLeft[i] = null;
                arrRight[j] = null;
            }
        }
    }
    //at this point, everything from the left array has been pushed into the new Array, and any duplicates from the left to the right have been set to null
    console.log("===========================")
    console.log("new array before adding stuff from right array: " + newArray)
    console.log("right array before adding stuff from right array: " + arrRight)
    console.log("===========================")

    //now we go through the right array and splice the remaining values into the new array
    for (let i = 0; i < arrRight.length; i++) {
        if (arrRight[i]) {
            //using a boolean to determine whether the arrRight number has been spliced or not-> once we splice something, break out of the for loop
            var spliced = false;
            for (let j = 0; j < newArray.length && spliced == false; j++) {
                //if the value in the new array is greater than the one from the right array, splice the right array value into the new array before newArray[j]
                if (newArray[j] >= arrRight[i]) {
                    console.log("adding " + arrRight[i] + " to new array");
                    newArray.splice(j, 0, arrRight[i]);
                    spliced = true;
                }
                //if we get to the end of the new array and the right array value is still larger, just push it in
                if (j == newArray.length - 1 && arrRight[i] > newArray[j]) {
                    console.log("adding " + arrRight[i] + " to new array");
                    newArray.push(arrRight[i]);
                    spliced = true;
                }
            }
        }
    }
    // console.log(arr2);
    arrLeft = savedLeft;
    arrRight = savedRight;
    return newArray;
}

// var arr1 = [1, 5, 6, 9];
// var arr2 = [2, 6, 10];
// console.log(union(arr1, arr2));

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(union([1,2,2,2,7],[2,2,6,6,7]));
// console.log(union([1,5,9],[2,6,10]));