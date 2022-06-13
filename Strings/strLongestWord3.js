/* 
** Create a function that, given a string of words, 
** returns the longest word. 
*/
const LongestWord2 = (str) => {
    let longWord = "";
    let word = "";
    let wordCount = 0;
    const strArray = str.split(" ");
    console.log(strArray);
// Loop through the length of the string
    for( let i = 0; i < strArray.length; i++) {
        // concatenate to word until you hit a space
       // console.log(word);
        // console.log(str[i]);
            
            // if word.length greater than wordCount replace word
            console.log(strArray[i]);
            word = strArray[i];
            // console.log("word.length is " + word.length)
            // console.log("wordCount is " + wordCount)
            if(word.length > wordCount) {
                longWord = word;
                wordCount = longWord.length;
            }
        }
        return longWord; 
}


// console.log(LongestWord("Snap crackle pop makes the world go round!"));
console.log(LongestWord2("Snap crackle pop makes the"));