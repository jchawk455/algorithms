const isPangram = (str) => {
    let allLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    str = str.toUpperCase();
    //go through the string and eliminate letters from allLetters
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < allLetters.length; j++) {
            if (str[i] == allLetters[j]) {
                allLetters.splice(j, 1);
            }
        }
    }

    //after going through the string, check if allLetters has anything left inside it
    if (allLetters == "") {
        return true;
    } else {
        console.log("Not a pangram. Unused letters are: " + allLetters)
        return false;
    }
}

////////////////////////////////////////////////////////////////////////

//perfect pangram, other students' solutions from discord:

const isPerfectPangram = (str) => {
    if(!isPangram(str)){
        return false;
    } else {
        let newStr = str.toUpperCase();
        let tempArr = [];
        for(let i = 0 ; i < newStr.length; i++){
            if(tempArr.length === 0 || !tempArr.includes(newStr[i])){
                tempArr.push(newStr[i]);
            } else {
                return false;
            }
        }
    }
    return true;
} 
console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false

const isPerfectPangram2 = (str) => {
    const tempString = upperCaseIt(str)
    let chars = {};
    for (const idx in tempString) {
        let char = tempString[idx]
        if(char >= "A" && char <= "Z") {
            if (chars[char]) chars[char] += 1;
            else chars[char] = 1;
        }
    }
    if(Object.keys(chars).length === 26) {
        let valArr = Object.values(chars)
        for (const idx in valArr) {
            if(valArr[idx] > 1) return false;
        } 
        return true;
    }
    return false;
}

// console.log(isPangram("Waxy and quivering, jocks fumble the pizza.")); //returns true
// console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
// console.log(isPangram("Sphinx of black quartz, judge my vow"));
// console.log(isPangram("A"));

// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true

// console.log(isPerfectPangram("The five boxing wizards jump quickly."))