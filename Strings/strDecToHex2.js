//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
// 1D2 = 1 x 16 to the 2nd = 256 + 15 x 16  to the 1st = 240 + 2 = 
const hexStrToDec = (str) => {
//    create a map with keys 0 through E and values 0 through 15
//    process the string in a loop from left to right
//      - use str[i] to look up the value
//    value is multiplied by 16**

let result = 0;
let value = 0; 
var mapHex = new Map([["0", 0],
["0", 0],["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],
["7", 7],["8", 8],["9", 9],["A", 10],["B", 11],["C", 12],
["D", 13],["E", 14],["F", 15]])

    for(let i = 0; i < str.length; i++) {
        result += mapHex.get(str[i]) * (16**(str.length-1-i));
    }
    return result;
}

console.log(hexStrToDec("10"));
console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
console.log(hexStrToDec("3B5"));
console.log(hexStrToDec("FFF"));
console.log(hexStrToDec("F92E7"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));
