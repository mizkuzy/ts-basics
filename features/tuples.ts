// Tuple is an array-like structure where each element represents some property of a record
const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40
}

const cola: [string, boolean, number] = ['black', true, 40]

// to avoid repeating of types order create a type as alias
type Drink = [string, boolean, number]

const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

console.log(sprite)
console.log(tea)

