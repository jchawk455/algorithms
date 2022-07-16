/* The advantages of a map in Javascript
A map is like a “countable” object (i.e. a dictionary)
Maps seem almost the same as JavaScript objects. However, there are some things specific to maps:

In maps, any type of data can be used as a key (contrary to only strings as keys in JavaScript objects). 
For example, it’s completely normal to use numbers as keys in a JavaScript map.
Maps are built for setting and getting key-value pairs. No prototypes and prototypal inheritance in maps! 
That’s why maps are a great choice when you just need a simple data storage with easy look up.
In objects, there’s no straightforward approach to getting the number of an object’s key-value pairs. 
Maps come with the size property. Counting a map’s key-value pairs is trivial.
In objects, to access the properties we simply use the dot operator or the brackets notation; in maps, 
we can get back values using the get method
*/
const mapStuff = () => {
/* Creating a map.  We can build a new map using the Map() constructor. */
    let players = new Map();
//    return players;  // returns Map(0) {};

/* Populating a map data structure.  To populate a map, we use the set method. We pass the key and its value to the 
set method like this: */

    players.set(77, "Luka Doncic");
    // return players;



/*
Passing more than one key-value pairs to a new map
There is a way to pass multiple key-value pairs to a new map, using an array of arrays:
*/

let players2 = new Map(
    [
        [77, "Luka Doncic"], 
        [23, "Michael Jordan"], 
        [34, "Shaquille O'Neal"], 
    ]
)

let colors = new Map(
    [ 
        ["tomato","#ff6347"],
        ["royalblue","#4169e1"],
        ["darkgreen","#006400"] 
    ]
);

/* 

Adding key-value pairs to existing maps
For each additional key-value pair, we can run another set method:
*/

players.set(21, "Joel Embiid").set(13, "Wilt Chamberlin").set(17, "John Havlichek");

/*
What is the size of a specific map?
To find out the number of key-value pairs in a map, we use the size method, like this:
*/

console.log(colors.size);

// return players.get(21);

console.log(colors.delete("tomato"));
colors.clear();
// return colors;

// return players.has(79);

/* 
Convert a map to an array
To convert a map to an array, we can:

use a spread operator
use the Array.from method
With the spread operator, it’s simple:

*/
let arr = [...players];
arr.push([33, "Kareem Abdul-Jarrar"]);
return arr;

}
console.log(mapStuff());