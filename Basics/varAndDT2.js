// Week 1 Day 3 -- Always isSunny

// Always isFunny

/* 
    this is a multi-line comment
    shift+option+A
*/

//TERMINAL
//terminal -> command line interface. You are interfacing with your computer through a command line. It's like a text-based game--just another way of interfacing with your computer.
//ls -> check what's available in the directory you're in
//cd -> change directory. i.e. "cd josh_folder" or "cd web_fundamentals"
//pwd - displays the full path to the current directory. (dir on windows)

// if you're using a boolean, it's good practice to start the variable name with "is"

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// Conditional statements begin with the keyword "if"
// Within the parentheses: a boolean expression that must evaluate to true or false

if (isSunny) {
    whatToBring += "sunglasses, "; //"code blocks" are what exist between the curly brackets
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);



for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {                //you can't have an "else" by itself- it means "otherwise, do..."
        console.log("ignition!"); //"else" does not have a conditional because it is conditional itself
    }
}

console.log("liftoff!");
// Prediction: 10 9 8 7 6 5 4 3 Ignition! 1 liftoff!

///////////////

// PSEUDOCODE
// Loop through the array
// For each array number, check if greater than 0
// If it is greater than 0, add 1 to countPositive

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0, 7, 8, -3, 5];
    
for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0){
        console.log(i);
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");

//////////////

// PSEUDOCODE
// Create a far loop that starts at zero, stops at the end of the array, and increments by 1
// Inside the for loop, create an if statement that checks if the current element in the array is less than 0. if it is, then I know I have a negative number. 
// Inside the if statement, increment countNegatives by 1

var countNegatives = 0
var numbers = [-2, 6, 7, -5, -13, 6, -12, 0]

for(var i=0; i< numbers.length; i++) {
    if(numbers[i] < 0){
        console.log[i];
        countNegatives++
    }
}

console.log("there are " + countNegatives + " negative numbers")