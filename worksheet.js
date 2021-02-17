const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const getAllNames = characters.map((allNames) => allNames.name)
console.log(getAllNames)
//2. Get array of all heights
const getAllHeights = characters.map((allHeights) => allHeights.height)
console.log(getAllHeights)
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({name: character.name, height: character.height}))
console.log(minifiedRecords)
//4. Get array of all first names
const getAllFirstNames = characters.map((firstNames) => firstNames.name.split(" ")[0])
console.log(getAllFirstNames)

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const greaterThanMass = characters.filter((greaterMass) => greaterMass.mass > 100)
console.log(greaterThanMass)
//2. Get characters with height less than 200
const lessThanHeight = characters.filter((lessHeight) => lessHeight.height < 200)
console.log(lessThanHeight)
//3. Get all male characters
const allMaleCharacters = characters.filter((allMales) => allMales.gender === "male")
console.log(allMaleCharacters)
//4. Get all female characters
const allFemaleCharacters = characters.filter((allFemales) => allFemales.gender === "female")
console.log(allFemaleCharacters)

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
