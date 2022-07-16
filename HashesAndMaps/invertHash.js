// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys
const invertHash = (map) => {
    let mapInvert = {};

    for( let key in map) {
        mapInvert[map[key]] = key;
    }
    return mapInvert;

}

console.log(invertHash({"name": "Zaphod", "numHeads": 2}));