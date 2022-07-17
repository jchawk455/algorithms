//Reverse a String using a stack in Javascript
const StaReverseString = (str) => {
    let s = [];
    let chrArray = str.split("");

    for(let i = 0; i < chrArray.length; i++) {
        s.push(chrArray[i]);
    }

    for(let i = 0; i < chrArray.length; i++) {
        chrArray[i] = s.pop();
    }
 
    return(chrArray.join(''));
}

console.log(StaReverseString("!!!ylF selgaE ylF"));