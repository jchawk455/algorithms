let map = new Map();
const arrSortByFreq = (inputArray) => {
    for(let i = 0; i < inputArray.length; i++) {
       // look up key is key is not there, addit else increment value by 1
        if(map.has(inputArray[i])) {
            map.set(inputArray[i], map.get(inputArray[i])+1);
        }
        else map.set(inputArray[i], 1);
    }

    
    return inputArray.sort((a,b) => map[a] - map[b] || b - a);

    // const keys = [...map.keys()];
    // const values = [...map.values()];
    // let entries = sortNumAsc.entries();
    // for(let ele of entries) 
    //     console.log(ele);
}

console.log(arrSortByFreq([6,1,2,1,7,5,5,2,7,1,1,7]));