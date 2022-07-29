/* Given an integer, write a function that returns the sum of all 
** the multiples of 3 and 5 that are equal to or below that integer. 
** For example, given the integer 10, we know that 3, 5, 6, and 9 are all multiples of 3 or 5. 
** The sum of these multiples is 23. 
*/

const basThreeAndFive = (upToInt) => {
    let sum = 0;
    for( let i = 0; i <= upToInt; i++ ) {
        if((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}

console.log(basThreeAndFive(10));
console.log(basThreeAndFive(15));
console.log(basThreeAndFive(21));