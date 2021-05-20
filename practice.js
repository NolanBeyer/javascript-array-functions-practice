//* Template Literal

// const ages = [23, 42, 18, 20, 6]

// const adults = ages.filter((age) => age > 18)

// console.log(adults)

// const name = 'Nolan'
// const age = 26

// const sentence = `Hi my name is ${name} and I am ${age} years old`

// console.log(sentence)

//* Prototype methods

// class Person {
//   constructor(name, age, children) {
//     ;(this.name = name), (this.age = age), (this.children = children)
//   }
//   speak() {
//     console.log(`Hi my name is ${this.name}`)
//   }
//   birth(child) {
//     this.children.push(child)
//   }
// }

// const Will = new Person('Will', 20, ['Sean', 'Sara'])
// Will.speak()
// Will.birth('Jess')
// console.log(Will.children)

//* Spread Operator

const names = ['Jon', 'Bill', 'Sam']
const moreNames = ['William', 'Paul', 'Mike']

console.log(...names, 'Gio', ...moreNames)
