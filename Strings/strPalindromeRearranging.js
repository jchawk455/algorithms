// from Codesignal Arcade Exploring the Waters
const palindromeRearranging = (inputString) => {
    let charMap = new Map;
    let oddCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        charMap.set(inputString[i], charMap.get(inputString[i]) + 1 || 1);
    }
    for (const [x, y] of charMap.entries()) {
        if (charMap.get(x) % 2 != 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    return true;
}
console.log(palindromeRearranging("aaabbddv"));