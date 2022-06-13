// from Codesignal Arcade Exploring the Waters
const alternatingSums = (a) => {
    let oddSum=0;
    let evenSum=0;
    let weightArray = [];
    for(let i = 0; i < a.length; i++) {
        if(i % 2 == 0) 
            oddSum += a[i];
        
        else 
            evenSum += a[i];
    }
    weightArray[0] = oddSum;
    weightArray[1] = evenSum;

    return weightArray;
}


console.log(alternatingSums([50,60,60,45,70]));