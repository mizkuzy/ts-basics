class Vehicle {
  constructor(public colour: string) {
    this.colour = colour
  }

  drive(): void {
    console.log('chugga chugga')
  };

  protected tellMeYourSecret(): void {
    console.log(this.secret())
  }

  private secret(): string {
    return 'I\'m sexy and I know it'
  }
}

class Car extends Vehicle {
  constructor(public colour: string, public wheelsNumber: number) {
    super(colour);
  }

  drive(): void {
    console.log('vroom')
  };

  tellMeYourSecret(): void {
    super.tellMeYourSecret()
  }
}

const vehicle = new Vehicle('black')
vehicle.drive()
console.log(vehicle.colour)

const car = new Car('red', 4)
car.drive()
car.tellMeYourSecret()
console.log('car colour:', car.colour)
console.log('car wheels number:', car.wheelsNumber)