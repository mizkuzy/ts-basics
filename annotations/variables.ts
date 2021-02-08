const apples: number = 5
const speed: string = 'fast'
const hasName: boolean = true
const nothingMuch: null = null
const nothing: undefined = undefined

// Array
let colors: string[] = ['red', 'green']
let numbers: number[] = [1, 2, 4]

// Classes
class Car {

}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logIt: (x: string) => void = (x => {
  console.log(`I like to log: ${x}`)
})

// When to use annotations
// 1) When function returns the 'any' type
console.log(JSON.parse('true')) // boolean
console.log(JSON.parse('3')) // number

const str = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(str)

// 2) When we declare a var on one line and initialize it later
const words = ['aaa', 'bbb', 'ccc']
let wordExist: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'bbb') {
    wordExist = true
  }
}

// 3) Variable whose type cannot be inferred correctly
const myNumbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] > 0) {

  }
}