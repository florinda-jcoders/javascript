function createLamp() {
  return {
    isOn: false,
    turnOn: function () {
      this.isOn = true;
      console.log("Hej Llampa eshte ndez.");
    },
    turnOff: function () {
      this.isOn = false;
      console.log("Hej Llampa eshte fik.");
    },
    displayStatus: function () {
      console.log(`Llampa eshte ${this.isOn ? "ON" : "OFF"}`);
    },
  };
}

// let llampaGjelbert = createLamp();
// llampaGjelbert.displayStatus();
// llampaGjelbert.turnOn();
// llampaGjelbert.displayStatus();
// llampaGjelbert.turnOff();
// llampaGjelbert.displayStatus();

class SuperHero {
  constructor(name) {
    this.name = name;
  }

  usePower() {
    throw new Error("Fuqia per secilen klase duhet te vendoset (mbishkruhet).");
  }
}

class FlyingHero extends SuperHero {
  usePower() {
    console.log(`Hero ${this.name} can fly.`);
  }
}

class StrengthHero extends SuperHero {
  usePower() {
    console.log(`Ky hero ${this.name} mund te mbaje objekte te renda`);
  }
}

try {
  let superman = new FlyingHero("Superman");
  superman.usePower();
} catch (error) {
  console.log(error.message);
}
