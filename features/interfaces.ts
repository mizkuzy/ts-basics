interface Reportable {
  about(): string
}

const koko = {
  name: 'Koko De Lolo',
  age: 26,
  hasGender: false,
  about(): string {
    return `${this.name}: I like to move it, move it! 
           I'm ${this.age} years old`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
  about(): string {
    return `I'm ${this.color} drink and have ${this.sugarContent} grams of sugar`
  }
}

const printAbout = (item: Reportable): void => {
  console.log(`${item.about()}`)
}

printAbout(koko)
printAbout(drink)