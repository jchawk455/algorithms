const arrs2Map = (array1, array2) => {
    // Create a map
    // create a for loop
    //      - set each key equal to each item in array1
    //      - set each value equal to each item in array2
    //      print the map

    const map = new Map();

    for( let i = 0; i < array1.length; i++) {
        map.set(array1[i], array2[i]);
    }

    return map;

}

console.log(arrs2Map(["abc", 3, "yo"],[42, "wassup", true]));