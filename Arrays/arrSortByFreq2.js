const arrSortByFreq = (inputArray) => {
    let map = {};
    for(let i = 0; i < inputArray.length; i++) {
        map[inputArray[i]] = (map[inputArray[i]] || 0) + 1;
    };
    console.log(map);
    return inputArray.sort((a,b) => map[a] - map[b] || b - a);
}
    

console.log(arrSortByFreq([6,1,2,1,7,5,5,2,7,1,1,7]));
console.log(arrSortByFreq([6,1,2,1,7,5,5,2,7,1,1,7,2]));