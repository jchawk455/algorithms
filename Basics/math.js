// The Math Library
// Predict what each of the following will return. Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor); // --> 1
console.log(ceiling); // --> 4
console.log(random); // --> Will return a random number between 0 and 1 (including 0, not including 1) -- different numbers of decimal places though

/* Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random. */

//need to multiply math.random by 6
//and then use floor or ceiling to make them integers

function d6() {
    var roll = Math.floor(Math.random()*6+1);
    return roll;
}
    

//here's a for loop that rolls the dice 10 times
for (let i = 0; i < 11; i++) {
    var playerRoll = d6();
    console.log("The player rolled: " + playerRoll);
}


/* Consult the Oracle
Using the following array, write a function that will answer all of our questions by randomly choosing a response */

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function magic8Ball(){
    var theAnswer = lifesAnswers[Math.floor(Math.random()*20)];
    return theAnswer;
}

var roll = magic8Ball();
console.log(roll);