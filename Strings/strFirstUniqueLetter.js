/* 
** Return the index of the first unique (case-sensitive) 
** character in a given string. 
*/
// let map = new Map();
// let tempChar = "";
const FirstUniqueLetter = (str) => {
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

    /* Iterate through the map entries and look for the first character
    ** that is equal to 1 */
    for (const [x, y] of map.entries()) {
        if (y === 1) {
            tempChar = x;
            break;
        }
    }
    // console.log("tempChar is " + tempChar);

    for (let i = 0; i < str.length; i++) {
        // console.log
        if (str[i] === tempChar) {
            return i;
        }
    }

    return "none unique";
}
console.log(FirstUniqueLetter("empathetic monarch meets primo stinker"));
console.log(FirstUniqueLetter("the zoo is a wonderful place for him to get exercise"));
