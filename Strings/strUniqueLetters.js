/* Return only the unique characters from a given string. Specifically, 
omit ​all​ instances of a (case-sensitive) character if it appears more than once, 
including spaces and punctuation. Given "Snap! Crackle! Poop!"​, return "SnCrcklePp"​. */

let map = new Map();
let newStr = "";
const UniqueLetters = (str) => {  
 /* Loop thru str for the length of the string and 
  accumulate the occurrences of each character 
  in the string */
    for(let i = 0; i < str.length; i++) {
        map.set(str[i], map.get(str[i]) + 1 || 1);
     }

/* Iterate through the map entries and concatenate only
   the unique characters(value < 2) */
    for (const [x,y] of map.entries()) {
        if (y < 2) {
            newStr = newStr += x;
         }
    }
    return newStr;
}

// console.log(UniqueLetters("Snap! Crackle! Poop!"));
console.log(UniqueLetters("The rain in Spain falls mainly in the plain."));