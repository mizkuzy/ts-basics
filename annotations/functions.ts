//
const add = (a: number, b: number): number => {
  return a + b
}
// Inference could be used only for returned type not for input params
// return type could be omit but it isn't recommended

const subtract = (a: number, b: number) => {
  return a - b
}

console.log(add(1, 2))
console.log(subtract(3, 1))

const logger = (msg: string): void => {
  console.log(msg)
}

// used rarely
const throwError = (msg: string): never => {
  throw new Error(msg)
}

// destructuring
const forecast = {
  date: new Date(),
  weather: -4
}

const printWeather = ({date, weather}: { date: Date, weather: number }): void => {
  console.log(`Weather on date ${date} is ${weather}`)
}

printWeather(forecast)