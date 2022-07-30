const strCamelCase = (inputString) => {
    let wordArray = inputString.split(" ");

    for(let i = 0; i < wordArray.length; i++ ) {
        if(i !== 0) {
            wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        }
        else {
            wordArray[i] = wordArray[i].charAt(0).toLowerCase() + wordArray[i].slice(1);

        }
    }
    const camelString = wordArray.join("");

    return camelString;
}

console.log(strCamelCase("Convert this sentence to camel case"));
console.log(strCamelCase("We practice string algorithms"));
console.log(strCamelCase(""));