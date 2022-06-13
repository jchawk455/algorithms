const ReverseWordOrder = (str) => {
    let stack = [];
    let word = "";
    let revStr = "";
    // loop through the string until you get to a space
    for( let i=0; i < str.length; i++ ) {
        if(str[i] != " " ) 
            word += str[i];
        else {
            stack.push(word.trim());
            word = "";
        }
    }
    stack.push(word.trim());
    console.log(stack);

    while(stack.length > 0) {
        revStr += stack.pop() + " ";
    }
    
    return revStr;
}



        // concatenate to a word until you hit a space
        // trim and push the word onto the stack

    // loop through the stack, popping each word off
    // concatenate the word to a new string + " ".

console.log(ReverseWordOrder("This is a test"));