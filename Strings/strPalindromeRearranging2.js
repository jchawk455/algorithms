// from Codesignal Arcade Exploring the Waters
const palindromeRearranging = (inputString) => {
    inputArray = inputString.split('');
    console.log(inputArray);
    sortedInputArray = inputArray.sort();
    console.log(sortedInputArray);
    sortedInputString = sortedInputArray.join('');
    console.log(sortedInputString);
    regInputString = sortedInputString.replace(/(\w)\1/g,'');
    console.log(regInputString);
    
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
}
console.log(palindromeRearranging("abbavy"));
