
//"Did I shine my shoes today?" -> ["Did", "I", "shine", "my", "shoes", "today?"]
const stringToWordArray = (str) => {
    var strArray = []
    for (let i = 0; i < str.length; i++) {
        var word = ""
        while (str[i] != " " && i < str.length) {
            word += str[i]
            i++;
        }
        strArray.push(word);
        while (str[i+1] && str[i+1] == " ") {
            i++;
        }
    }
    return strArray;
}

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    var reverseWords = ""
    for (let i = 0; i < str.length; i++) {
        var word = ""
        while (str[i] != " " && i < str.length) {
            word += str[i]
            i++;
        }
        reverseWords = word + " " + reverseWords
        while (str[i+1] && str[i+1] == " ") {
            i++;
        }
    }
    return reverseWords;
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));