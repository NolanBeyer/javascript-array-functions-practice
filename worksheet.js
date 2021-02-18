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
console.log("All Names:", getAllNames)
//2. Get array of all heights
const getAllHeights = characters.map((allHeights) => allHeights.height)
console.log("All Heights:", getAllHeights)
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({name: character.name, height: character.height}))
console.log("Name and Height:", minifiedRecords)
//4. Get array of all first names
const getAllFirstNames = characters.map((firstNames) => firstNames.name.split(" ")[0])
console.log("First Names:", getAllFirstNames)


//***FILTER***
//1. Get characters with mass greater than 100
const greaterThanMass = characters.filter((greaterMass) => greaterMass.mass > 100)
console.log("Greater Mass:", greaterThanMass)
//2. Get characters with height less than 200
const lessThanHeight = characters.filter((lessHeight) => lessHeight.height < 200)
console.log("Height less than:", lessThanHeight)
//3. Get all male characters
const allMaleCharacters = characters.filter((allMales) => allMales.gender === "male")
console.log("All Males:", allMaleCharacters)
//4. Get all female characters
const allFemaleCharacters = characters.filter((allFemales) => allFemales.gender === "female")
console.log("All Females:", allFemaleCharacters)


//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some((oneMale) => oneMale.gender === "male")
console.log("One Male:", oneMaleCharacter)
//2. Is there at least one character with blue eyes?
const oneSetOfBlueEyes = characters.some((blueEyes) => blueEyes.eye_color === "blue")
console.log("Blue Eyes:", oneSetOfBlueEyes)
//3. Is there at least one character taller than 210?
const oneCharacterTallerThan = characters.some((tallerThan) => tallerThan.some >=210)
console.log("Taller Than:", oneCharacterTallerThan)
//4. Is there at least one character that has mass less than 50?
const oneCharacterHeavierThan = characters.some((heavierThan) => heavierThan.mass < 50) 
console.log("Heavier Than:", oneCharacterHeavierThan)

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass)
console.log("By mass:", byMass)
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height)
console.log("By Height:", byHeight)
//3. Sort by name
const byName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1
}) 
console.log("By Name:", byName)
//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if(a.gender < b.gender) return -1
    return 1
})

console.log("By Gender:", byGender)

//***REDUCE***

//1. Get total mass of all characters

const getTotalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)

console.log("Total Mass:", getTotalMass)

//2. Get total height of all characters

const getTotalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)

console.log("Total Height:", getTotalHeight)

//3. Get total number of characters by eye color

const totalNumberOfEyeColor = characters.reduce((acc, cur) => {
    let color = cur.eye_color
    if(acc[color]) {
        acc[color] ++
    } else {
        acc[color] = 1
    }
    return acc
}, {})
console.log(totalNumberOfEyeColor)

//4. Get total number of characters in all the character names
const totalNumberOfCharacters = characters.some((acc, cur) => acc + cur.name, 0)
console.log("Total number of characters:", totalNumberOfCharacters)

//***EVERY***
//1. Does every character have blue eyes?
const doAllHaveBlueEyes = characters.every((blueEyes) => blueEyes.eye_color === "blue")
console.log("Blue eyes:", doAllHaveBlueEyes)
//2. Does every character have mass more than 40?
const massOver40 = characters.every((over40) => over40.mass > 40)
console.log("Mass Over 40:", massOver40)
//3. Is every character shorter than 200?
const shorterThan200 = characters.every((shorterThan) => shorterThan.height < 200)
console.log(shorterThan200)
//4. Is every character male?
const isEveryCharacterAMale = characters.every((allMales) => allMales.gender === "male")
console.log(isEveryCharacterAMale)