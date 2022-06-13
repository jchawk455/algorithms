// Code Flow - Functions

// A function is a series of instructions to accomplish a task, like a recipe. It has ingredients (parameters) and instructions (code block). IT DOES NOT RUN UNTIL YOU CLL IT BY NAME.

var x = 5

// FUNCTION DECLARATION
//In the declaration, the object of the function is called a parameter ("new value" is the parameter here)
function setX(newValue) {
    x = newValue;
}

 //calling the function here. The function does NOT run until you call it.
 //when we call the function, they're called arguments (the object of the function--15 is the argument here)
console.log(x);
setX(15);

console.log(x);

//scoping variables. All variables have scope--the realm in which the exist. In the above code, the variable x was created outside of the function, and has GLOBAL SCOPE. Meaning: we can access and set this variable and get its value inside of a function, and it actually changes outside of the function. It's available everywhere. The function has access to all global variables. However, if we created x inside the function, then it is not available globally--it has LOCAL SCOPE. Meaning: that variable x is locked inside of the function, and its value is not stored unless we store it with a "return" statement.

// DAD JOKE: There was a contest to see who could come up with the best name for an iterator variable. ... i won.

// use keywords LET and CONSTANT to create variables (will get into more later). We're just using VAR for now.

// The VALUE of a function is whatever that function returns!

//THE RETURN OF RETURN
var x = 5;
    
function addToX(amount) {
    return x + amount; //a return statement ends the function.
    console.log("hello there"); //this is dimmer because it comes after the return statement. It's unreachable.
}
    
console.log(x); //5
var result = addToX(-10); //NADA, no return to console
console.log(result); //-5
console.log(x); //5 --> x is unchanged because the value was never changed inside the function (there was no "=" operator in the function)

//calling a function is like telling the code to REMEMBER something; console.log() tells the code to SAY something
//when we console.log() a function call, we are console.logging whatever that function returns

//DAD JOKE: how do you make a bug feel better? you console.log() it LOL

//IS THE ARRAY A PALINDROME?


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //"left" is the sentry. Name variables with meaningful names!
        var right = arr.length-1-left; //creating a variable inside the for loop recreates it every time
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

//rem unit -> one "em" is the width of the elements font. when you put the "r" in front of it (meaning "root"), it means the "em at the root level", and will be equal to one character length in the user's current font size