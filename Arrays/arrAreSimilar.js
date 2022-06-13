// from Codesignal Arcade Exploring the Waters
const areSimilar = (a, b) => {
    DiffA = [0,0];
    DiffB = [0,0];
    diffCols = 0;
    diff = 0;

    for(let i = 0; i < a.length; i++ ) {
        if(a[i] != b[i]) {
            diffCols++;
            DiffA[diff] = a[i];
            DiffB[diff] = b[i];
            diff++;
        }
        if(diffCols > 2)
            return false;
    }

    if((diffCols == 0 || diffCols == 2) &&  (DiffA[0] == DiffB[1] && DiffB[0] == DiffA[1]))
        return true;
    else 
        return false;
}

console.log(areSimilar([1,2,3], [3,1,2]));