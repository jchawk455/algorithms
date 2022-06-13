//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    let result = 0;
    

    for(let i = 0; i < str.length; i++) {
        result += str[i] * (2**(str.length-1-i));
    }
    return result;
}

console.log(binToDec("1010000"));

console.log(binToDec("1010101"));
console.log(binToDec("100011"));
console.log(binToDec("100"));
console.log(binToDec("1000"));
console.log(binToDec("1111"));
console.log(binToDec("110101011"));
console.log(binToDec("1111111111"));

//if you have the time, do the opposite! Take in a decimal number and return a
//string with the binary data
const decToBin = (num) => {
    let result = "";
    
    while ( num > 0) {
        // console.log(num);
        result = (num % 2) + result;
        num = Math.floor(num / 2);
        // console.log(num);
        

    }

    return(result);


}
// decToBin(80);
console.log(decToBin(85));
console.log(decToBin(420));
console.log(decToBin(11));
console.log(decToBin(181));
