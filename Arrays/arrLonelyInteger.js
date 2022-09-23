/*
Given an array of integers, where all elements but one occur twice, find the unique element.
*/

const lonelyinteger = (a) => {
    let myMap = new Map;
    let loner = -1;

    for(let i = 0; i < a.length; i++) {
        myMap.set(a[i], myMap.get(a[i]) + 1 || 1);
    }

    myMap.forEach((value, key, myMap) => {
        if(value < 2 ) {
            loner = key;
        }   
    });
    // });
    return loner;
}

console.log(lonelyinteger([1,2,3,4,4,3,2,1]));