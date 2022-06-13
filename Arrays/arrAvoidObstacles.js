// From CodeSignal Arcade Island of Knowledge
const avoidObstacles = (inputArray) => {
    let jumpAmt = 2;
    let currAmt = 0;
    let map= new Map;

    inputArray.sort();

    for(let i = 0; i < inputArray.length; i++) {
        map.set(inputArray[i], map.get(inputArray[i]) +1 || 1);
    }

    if(inputArray.length == 0) {
        return 1;
    }
    while (currAmt < inputArray[inputArray.length-1]) {
        currAmt = currAmt + jumpAmt;
        map.get(currAmt);
        if(map.get(currAmt)) {
            jumpAmt++;
            currAmt=0;
        }
    }
    return jumpAmt;
}

console.log(avoidObstacles([14,7,13,4,5,10,11,1,16]));

