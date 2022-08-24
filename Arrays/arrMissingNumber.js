const arrMissingNumber = (inputArray) => {
    let diff = inputArray[1] - inputArray[0];
    for(let i = 0; i < inputArray.length - 1; i++) {
        if((inputArray[i+1] - inputArray[i]) > diff)
            return inputArray[i + 1] - diff;
    }
    return "None missing";
}

console.log(arrMissingNumber([1,2,3,4,5,7,8,9]));
console.log(arrMissingNumber([1,3,5,9,11]));
console.log(arrMissingNumber([0, 1.5, 3, 6, 7.5, 9, 10.5, 12]));
console.log(arrMissingNumber([10, 30, 40, 50, 60, 70]));