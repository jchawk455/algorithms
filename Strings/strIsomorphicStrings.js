/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving 
the order of characters. No two characters may map to the same character, but a character 
may map to itself.
*/

/*
Steps to accomplish:
1) Compare string s length to string t.length
2) If they are not equal, return false
3) Create a Map
4) Loop through each of the strings for the length of s
5) If s' value is not there, add the s value as the key and the t value as the value
6) If s' value is there check the corresponding t value.  
7) If the t-strings value is equal to the value in the table, continue the loop
8) If not there, return false
9) If you get all the way to the end of the loop, return true.
*/
var isIsomorphic = function(s, t) {
    let charMap = new Map;
    let charMap2 = new Map;
    let j = 0;

    if(s.length != t.length) {
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        if(charMap.get(s[i]) === undefined) {
            charMap.set(s[i], t[i])
        }
        else
            if(charMap.get(s[i]) === t[i]) {
                j++;
                continue;
            }
            else
                return false;
    }
    j = 0;
    for(let i = 0; i < t.length; i++) {
        if(charMap2.get(t[i]) === undefined) {
            charMap2.set(t[i], s[i])
        }
        else
            if(charMap2.get(t[i]) === s[i]) {
                j++;
                continue;
            }
            else
                return false;
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'));