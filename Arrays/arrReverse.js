// We'll reverse the array by using it like a stack
const arrReverse = (inputArray) => {
    let revArray = [];
    let len = inputArray.length;
    for(let i = 0; i < len; i++) 
        revArray[i] = inputArray.pop();
    return revArray;
}

console.log(arrReverse([1,2,3,4,5,6,7,8,9]));
console.log(arrReverse(["Reverse", "This", "Array"]));
