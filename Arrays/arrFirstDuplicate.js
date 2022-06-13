// From Codesignal Interview Qs
/*
Given an array a that contains only numbers in the range from 1 to a.length, 
find the first duplicate number for which the second occurrence has the minimal 
index. In other words, if there are more than 1 duplicated numbers, return the number 
for which the second occurrence has a smaller index than the second occurrence of the other 
number does. If there are no such elements, return -1.

Can't use a set to find the dup because javascript avoids detecting the faled insert
unless you use the buuilt-ins "has" or "includes
*/

const firstDuplicate = (a) => {
    let numMap = new Map;
    for(let i = 0; i < a.length; i++) {
        numMap.set(a[i], numMap.get(a[i])+1 || 1);
        if(numMap.get(a[i]) > 1)
            return a[i];
    }
    return -1;
}

console.log(firstDuplicate([2,1,7,5,3,4]));
