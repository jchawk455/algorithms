/* Given a string, write a function that will detect whether or not it is a pangram. 
Return true if it is, and false if not. 

NOTES:
-A pangram is a sentence that contains every single letter of the alphabet at least once
-Pangrams are not case sensitive
-You may ignore numbers and punctuation.

We're going to use a map to keep track of the letter usage.

Steps:
1) Pass in a string
2) Convert the String to upper case
3) Initialize the a map with the 26 letters of the alphabet
4) Loop through a string that was passed in
    a - do a lookup of each letter as it comes through the string loop
    b - if the letter is not there, set the value to one
    c - if the letter is there, add 1 to it or do nothing
5) After the loop of the string is complete, loop the the map, checking that the
value for each key(letter) is > 0
6) If a value is a not > 0, return false
7) If you get to the end of the map, return true
*/

const strIsPangram = (str) => {
    const mapAlpha = new Map([
        ['A', 0],
        ['B', 0],
        ['C', 0],
        ['D', 0],
        ['E', 0],
        ['F', 0],
        ['G', 0],
        ['H', 0],
        ['I', 0],
        ['J', 0],
        ['K', 0],
        ['L', 0],
        ['M', 0],
        ['N', 0],
        ['O', 0],
        ['P', 0],
        ['Q', 0],
        ['R', 0],
        ['S', 0],
        ['T', 0],
        ['U', 0],
        ['V', 0],
        ['W', 0],
        ['X', 0],
        ['Y', 0],
        ['Z', 0]
    ]);
    
    if(str === "")
        return false;


    let str1 = str.toUpperCase(str);

    for(let i in str1) {
        mapAlpha.set(str1[i], mapAlpha.get(str1[i]) + 1 || 1);
    }

    for ( const [key, value] of  mapAlpha ) {
        if(value === 0)
            return false;
    }
    
    return true;
}

console.log(strIsPangram("The quick brown fox jumps over the lazy dog"));
console.log(strIsPangram("The quick brown fox jumps"));
console.log(strIsPangram(""));
console.log(strIsPangram("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));