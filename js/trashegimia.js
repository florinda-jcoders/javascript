class Animals {
  constructor(name) {
    this.name = name;
  }

  animalName() {
    return `${this.name}`;
  }
}

class Cat extends Animals {
  constructor(name) {
    super(name);
    console.log("U kriju klasa femije");
  }
}

const macja = new Cat("tom");

console.log(macja.animalName());

class WildAnimals extends Animals {
  constructor(name, habitat) {
    super(name);
    this.habitat = habitat;
    console.log("U kriju klasa femije per kafshet e egra.");
  }

  getHabitat() {
    return `${this.habitat}`;
  }
}

const rreqebulli = new WildAnimals("Xhezide", "Malet e Sharrit");
console.log(rreqebulli.getHabitat());

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return `Emri eshte ${this.name}`;
  }
}

class Studenti extends Person {
  constructor(name, nota) {
    super(name);
    this.nota = nota;
  }
  getName() {
    return "Macja mjaullit";
  }
  getNota() {
    return `Nota studentit eshte ${this.nota}`;
  }
}

const studenti = new Studenti("Florinda", 4);
console.log(studenti.getName());
console.log(studenti.getNota());
