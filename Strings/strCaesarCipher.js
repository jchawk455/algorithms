const CaesarCipher = (inputString, shiftInt) => {
    let newString = "";
    for(let i = 0; i < inputString.length; i++) {
        let ascValue = inputString[i].charCodeAt();
         if(ascValue >= 65 && (ascValue <= (90 - shiftInt))) {
            newString += String.fromCharCode(ascValue + shiftInt);
        }
        else if(ascValue > (90 - shiftInt) && (ascValue <= 90)) {
             newString += String.fromCharCode(ascValue+shiftInt-26);
        }
    }
    return newString;
}

console.log(CaesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ",23));
console.log(CaesarCipher("ABC",0));
console.log(CaesarCipher("ATTACKATONCE",4));