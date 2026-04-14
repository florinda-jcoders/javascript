// const Person = function (emri, mbiemri) {
//   this.emri = emri;
//   this.mbiemri = mbiemri;
// };

// const florinda = new Person("Florinda", "Hasani");
// const john = new Person("John", "Doe");

// Person.prototype.sayHi = function () {
//   console.log(`Hi ${this.emri}`);
// };

// const filani = new Person("Filan", "Fisteku");
// console.log(filani);
// filani.sayHi();

const PersonDetails = {
  pershkrimi() {
    console.log(`Hi ${this.emri}`);
  },
};

const shtoPersonin = function (emri) {
  const person = Object.create(PersonDetails);
  person.emri = emri;
  return person;
};

const flora = shtoPersonin("Flora")
console.log(flora)
flora.pershkrimi()


