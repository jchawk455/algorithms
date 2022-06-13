// from Codesignal Arcade Exploring the Waters
const arrayChange = (inputArray) => {
        let moveCount = 0;
        let diff = 0;

        for(let i = 1; i < inputArray.length; i++) {
            if(inputArray[i] <= inputArray[i-1]) {
                diff = inputArray[i-1] - inputArray[i] + 1;
                moveCount += inputArray[i-1] - inputArray[i] + 1;
                inputArray[i] = inputArray[i] + diff;             
            }
        }
        return moveCount;
}

console.log(arrayChange([1,1,1]));