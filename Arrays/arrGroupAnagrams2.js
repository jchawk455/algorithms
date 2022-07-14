/* DESCRIPTION:
Write a function that takes in an array of strings, 
and returns a 2D array with all anagrams grouped together.

NOTES:
-An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, typically using all the original letters exactly once
-The groupings may occur in no particular order
*/

function groupAnagrams(inputArray) {
    let finalObj = {};

for(let word of inputArray) {
    let sortedAnag = word.split("").sort().join("");
    if (finalObj[sortedAnag]) {
        finalObj[sortedAnag].push(word);
    } else {
        finalObj[sortedAnag] = [word];
    }
}

return Object.values(finalObj);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));