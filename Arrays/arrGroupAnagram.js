/* DESCRIPTION:
Write a function that takes in an array of strings, 
and returns a 2D array with all anagrams grouped together.

NOTES:
-An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, typically using all the original letters exactly once
-The groupings may occur in no particular order
*/

const arrGroupAnagram = (inputArray) => {
    let index = []; 
    let words = [];

    for(let i = 0; i < inputArray.length; i++) {
        index[i] = i;
        words[i] = inputArray[i];
    }
    console.log(index);
    console.log(words);

    let w = "";
    for(let i = 0; i < inputArray.length; i++) {
        w = words[i];
        let sortString = (str) => {
            return str.split("").sort().join("");
        }
        words[i] = sortString(w);
        // console.log(sortString(w));
    }
    words.sort((a,b) => a > b ? 1 : b > a ? -1 : 0);
    console.log(...words);
};


arrGroupAnagram(["eat","tea","tan","ate","nat","bat"]);