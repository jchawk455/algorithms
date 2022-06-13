/* Create a function that accepts a string and an integer,
and rotates the characters in the string to the right by that amount

("Did I shine my choes today?", 9) -> "es today?Did I shine my sho"

*/


const rotateString = (str, num) => {
    //rotate num times, as long as num is greater than 0
    //grab the pivot index -> the place where we'll make a split to move the characters around
    var pivot = str.length - num;

    //if the pivot index ends up less than zero, keep adding the string length to it until it's greater than 0
    while (pivot < 0){
        pivot += str.length;
    }
    //get the back half of the characters using the pivot index
    var backChars = str.slice(pivot, str.length);

    //get the front half of the characters using the pivot index
    var frontChars = str.slice(0, pivot);

    //concat them to swap the positions and return
    return backChars + frontChars;
}


//return true if they are rotations of each other
const isRotation = (str1, str2) => {
    //get number of characters in the strings
    var len1 = str1.length;
    var len2 = str2.length;
    var savedString1 = str1;
    //if they're not equal, just return false and that's it
    if (len1 != len2) {
        return false;
    }
    //if they are equal, rotate one of them that number of times and keep checking if they end up equal to each other
    for (let i = 0; i < str1.length; i++) {
        var checkString = rotateString(str1, 1);
        //if at any point they become equal, return true
        if (checkString == str2) {
            str1 = savedString1;
            return true;
        }
        str1 = checkString;
    }
    str1 = savedString1;
    //if that never happens, return false
    return false;
}

let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

// console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho")); //true
// console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho")); //false