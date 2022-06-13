// JS variables and DataTypes - What are they even?

//an "=" is an assignment operator; try not to think of it as a mathematical "equals"

//Naming variables: 
//1. use camel casing. Not a rule that Javascript needs to work, just an industry convention. First letter is lower case, and every following word starts with an upper case letter. 
//2. A variable cannot start with a number, but it can have a number anywhere else.
//3. No spaces, dashes, or underscores.

//you can use double or single quotes to assign a string to a variable, it doesn't matter as long as it's consistent

//you can use a semi-colon or NOT; it doesn't care. You used to need to use it, but not anymore. However, it is good to get into the habit, because strongly-typed languages do require them.

//use keyword "var" to create a variable. Following the keyword, name the variable. Then assign a value to it with the assignment operator "="

//you would say: "smoothie is assigned the value of 'banana mango spinach'"

var smoothie = "banana mango spinach";

//Primitive data types

//String - a group of characters bookended by quotes. 
var myName = "John"
var surname = "Cunningham"

//Concatenation = adding two strings together
var fullName = myName + " " + surname

console.log(fullName)

//Numbers - numbers are ... numbers. JS doesn't discriminate between integers and floating point numbers. They are both the same data type to JavaScript.

var age = 34
var grade = 99.9

//These are both numbers according to javascript - in others they may be an int and a float. 
//They behave as you would expect them to behave. They're numbers. You can do all of the arithmetic you want with them, etc.

//Mathematical operators: plus +, minus -, multiplication *, division /

//Booleans - can only have one of two values: true or false

var isRaining = false

var a = 25;
//reassign the value of "a" to be the old value of "a" minus 13
//a -= 13 would do the same thing
a = a - 13;
console.log(a / 2); // -> 6

//the console.log does not change the value of "a" unless you see an "=" operator

a = "hello";
console.log(a + " hello"); // -> hello hello

//Lesson 2 - Predict Loops

//For loop
//Four things for a for loop
//1. Name a sentry
//2. Where it starts
//3. Where it stops (i < 10 is a boolean statement; it must be true to enter the loop, and it will eventually become false, at which point the loop will end)
//4. How it changes

for (var i = 0; i < 10; i++) {
    console.log(i)
    i = i + 3
}

console.log("outside of the loop " + i) // -> "0, 4, 8, outside of the loop 12"

