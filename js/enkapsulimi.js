let employee = {
  basesalary: 500,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.basesalary + this.overtime * this.rate;
  },
};

// class Car {
//   #modeli;
//   #speed;
//   constructor(modeli, speed) {
//     this.#modeli = modeli;
//     this.#speed = speed;
//   }

//   setModel(model) {
//     this.#modeli = model;
//   }

//   getModel() {
//     return this.#modeli;
//   }

//   setSpeed(speed) {
//     if (speed > 0) {
//       this.#speed = speed;
//     } else {
//       console.log("Shpejtesia nuk mund te jete negative!");
//     }
//   }

//   getSpeed() {
//     return this.#speed;
//   }
// }

// let vetura = new Car("Toyta", 120);
// console.log(vetura.getModel());
// console.log(vetura.getSpeed());

class Car {
  constructor(model, speed) {
    this._vehicle = new Vehicle(model);
    this._speed = speed;
  }
  getModel() {
    return this._vehicle.getModel();
  }
  setSpeed(speed) {
    if (speed > 0) {
      this._speed = speed;
    } else {
      console.log("Shpejtesia nuk mund te jete negative!");
    }
  }
  getSpeed() {
    return this._speed;
  }
}

class Vehicle {
  constructor(model) {
    this._model = model;
  }
  getModel() {
    return this._model;
  }
}
let golf2 = new Car("golf 2", 120);
console.log(golf2.getModel());
console.log(golf2.getSpeed());
