//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the number of times it appears.
//For "aaaabbcddd" return "a4b2c1d3"
//no built in functions, parseInt() is ok
//abba -> "a1b2a1". it's consecutive, not total.

const encode = (str) => {
    //create an empty string to return later
    var newStr = ""
    //use an outer for loop to increment through the string
    for (let i = 0; i < str.length; i++) {
        var counter = 1;
        while (str[i+1] && str[i] == str[i+1]) {
            //use an inner while loop to check for consecutive values. as long as the next consecutive value is equal, add to a counter and increment i in the outer for loop
            counter++;
            i++;
        }
        //concat the new string with str[i] and the counter
        newStr += str[i] + counter;
        
    }
    return newStr;
}

//Given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?

/////////doesn't work for double digits
// const decode = (str) => {
//     var newStr = ""
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < parseInt(str[i+1]); j++) {
//             newStr += str[i];
//         }
//         i++;
//     }
//     return newStr;
// }

const decode = (str) => {
    //create a new empty string
    var newStr = ""
    for (let i = 0; i < str.length; i++) {
        var counter = "";
        var character = str[i];
        while (parseInt(str[i+1]) || str[i+1] == 0) {
            counter += str[i+1];
            i++;
        }
        for (let i = 0; i < parseInt(counter); i++) {
            newStr += character;
        }
    }
    return newStr;
}

// console.log(encode("aaabbcccc")); //a3b2c4
// console.log(decode("a3b2c4"));
console.log(decode("g12f10"));

// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));