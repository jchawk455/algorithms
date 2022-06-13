/* Week 2 Day 2 - So you want to be a JS objects master?
What are objects? 

Strings, numbers, and booleans are primitive datatypes.
Arrays and objects are a REFERENCE datatype. They can store multiple instances of primitives.
If you're curious, look at difference between stack vs heap. */

var num1 = 3
var num2 = num1
num2 = 5

var num1 = 3
var num2 = num1num1 = 5
num1 = 5

console.log(num2) // --> 3

///////

var obj1 = {
    'key': 4
};
var obj2 = obj1
obj1.key = 5
console.log(obj2); // --> { key : 5 }


///////

var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

/* Using the monster variable above how could we access the name?
Using the monster variable above how could we access the 2nd type? */

console.log(monster.name);

console.log(monster.types[1]);

// This is an array of objects. It's a bunch of objects nested inside of an array.
// Going forward, we're going to be querying a database. And what we'll get back is an array of objects. So it's very important to be able to parse an array of objects. Be able to set what you want to set, and get what you want to get.

var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99, we could...

/* for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
} */

/* Challenges - using the array of pokémon above and loops:
console.log the pokémon objects whose id is evenly divisible by 3
console.log the pokémon objects that have more than one type
console.log the names of the pokémon whose only type is "poison"
console.log the first type of all the pokémon whose second type is "flying" 

Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
*/









//first type of those with second type bring flying
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] == "flying") {
        console.log(pokémon[i].types[0]);
    }
}


///divisible by 3
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 == 0) {
        console.log(pokémon[i]);
    }
}

//more than one type
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1) {
        console.log(pokémon[i]);
    }
}

//names of pokemon with only type being poison

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 1) {
        if (pokémon[i].types[0] == "poison") {
            console.log(pokémon[i]);
        }
    }
}

//bonus
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 1) {
        if (pokémon[i].types[0] == "poison"){
            var nameBackwards = ""
            for (var j = pokémon[i].name.length - 1; j >= 0; j--){
                nameBackwards += pokémon[i].name[j]
            }
            console.log(nameBackwards);
        }
    }
}
