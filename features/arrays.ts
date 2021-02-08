// if we init array at once then we don't have to determine a type
// it will be determined automatically
const carMakers = ['toyota', 'ford', 'lada']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const myCar = carMakers.pop()
const car = carMakers[0]

// Prevent incompatible values
// carMakers.push(new Date()) // !!! error

// Help with 'map' and other built-in functions
const numbers = carMakers.map((car): number => {
  return car.toUpperCase().length
})

console.log(numbers)

const strings = carMakers.map((car: string): string => {
  return car.toUpperCase()
})

console.log(strings)

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2010-12-12']