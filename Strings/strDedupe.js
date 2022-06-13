//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {  
    // Create an empty map.
    let map = new Map();
    // 
    let newStr = "";
    // Load the map with the number of values
    // of each character
    for (let i = 0; i < str.length; i++) {
        map.set(str[i], map.get(str[i]) + 1 || 1);
    }
    console.log(map);
    // Loop through the string again but don't
    // print unless it's the last occurrence of the
    // character as indicated by the value being equal to 1
    for (let i = 0; i < str.length; i++) {
        //here's where I'm at!!!
        if(map.get(str[i]) === 1) 
            newStr += str[i];
        else 
            map.set(str[i],(map.get(str[i])-1));
    }
    return newStr;
}


// console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));
console.log(dedupe("This is freaking insane because I live in Cincinnati but I want to live in Mississippi with my family!"));
// console.log(dedupe("Sweet potato"));