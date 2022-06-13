// From Codesignal Interview Qs
/* 
** Return the index of the first unique (case-sensitive) 
** character in a given string. 
*/
// let map = new Map();
// let tempChar = "";
const firstNotRepeatingCharacter = (str) => {
    /* Loop thru str for the length of the string and 
  accumulate the occurrences of each character 
  in the string */
  let map = new Map();
  let tempChar = "";
    for (let i = 0; i < str.length; i++) {
        map.set(str[i], map.get(str[i]) + 1 || 1);
    }
    // for (const [x, y] of map.entries()) {
    //     console.log("key is " + x + " Value is " + y);
    // }
    for (const [x, y] of map.entries()) {
        if (y === 1) {
            tempChar = x;
            return tempChar;
        }
    }


    return "_";
}
console.log(firstNotRepeatingCharacter("empathetic monarch meets primo stinker"));
console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));


