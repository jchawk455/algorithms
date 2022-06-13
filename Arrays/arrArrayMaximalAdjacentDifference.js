// From CodeSignal Arcade Island of Knowledge
const arrayMaximalAdjacentDifference = (inputArray) => {
    let lastDiff = 0;
    let diff = 0;
    for(let i = 1; i < inputArray.length; i++) {
        diff = (inputArray[i] - inputArray[i-1]);
        diff = (diff < 0) ? diff * -1 : diff;
        lastDiff = (diff > lastDiff) ? diff : lastDiff;
    }

    return lastDiff;
}

console.log(arrayMaximalAdjacentDifference([-10,4,1,0]));

