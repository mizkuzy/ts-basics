const profile = {
  fname: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },

  setAge(age: number): void {
    this.age = age
  }
}

const {age}: { age: number } = profile
console.log(age)

const {coords: {lat, lng}, fname}: { coords: { lat: number, lng: number }; fname: string } = profile
console.log(lat, lng, fname)
