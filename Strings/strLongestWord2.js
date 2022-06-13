/* 
** Create a function that, given a string of words, 
** returns the longest word. 
*/
const LongestWord = (str) => {
    let longWord = "";
    let word = "";
    let wordCount = 0;
// Loop through the length of the string
    for( let i = 0; i < str.length; i++) {
        // concatenate to word until you hit a space
        word += str[i];
        // console.log(word);
        console.log(str[i]);
        if(str[i] === " ") {
            
            // if word.length greater than wordCount replace word
            word = word.trim();
            // console.log("word.length is " + word.length)
            // console.log("wordCount is " + wordCount)
            if(word.length > wordCount) {
                longWord = word;
                wordCount = longWord.length;
                word = "";
            }
        }
    }


     return longWord; 
}

// console.log(LongestWord("Snap crackle pop makes the world go round!"));
console.log(LongestWord("Snap crackle pop makes the"));