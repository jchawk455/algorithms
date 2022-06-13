//partition
const partition = (arr) => {
    if (arr.length <= 1) {
        console.log("there's nothing to partition, this array is too small")
    } else {
        var pivotIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[pivotIndex]) {
                for (let j = i; j < arr.length - 1; j++) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                arr.splice(0, 0, arr.pop());
                pivotIndex++;
            }
        }
        // console.log(arr);
        return pivotIndex;
    }
}

//quick sort
//partition the array
//after partitioning it, it will split it up and recursively continue partitioning it

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const pivotIndex = partition(arr);
    // console.log(arr);
    let arrLeft = arr.slice(0, pivotIndex); //second value is not inclusive -> up to, but not included
    // console.log(arrLeft);
    let arrRight = arr.slice(pivotIndex + 1) //if you only put in one parameter, slice will just go to the end of the array
    // console.log(arrRight);
    
    arrLeft = quickSort(arrLeft);
    console.log("Left after recursion: " + arrLeft)
    arrRight = quickSort(arrRight);
    console.log("Right after recursion: " + arrRight)

    let combine = [...arrLeft, arr[pivotIndex], ...arrRight]; //put them in order (the base case for each recursive call gets added to this combine)

    return combine;
}

console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));