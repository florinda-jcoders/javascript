function greet() {
  console.log("Pershendetje");
}

greet.language = "Albanian";

console.log(greet.language);

function Person(emri, mbiemri, mosha, nota) {
  this.firstName = emri;
  this.lastName = mbiemri;
  this.age = mosha;
  updateNota: () => {
    this.nota = nota;
  };
  infoStudenti: () => {
    console.log(`${this.firstName} ka noten ${updateNota()}`)
  }
}

const florinda = new Person("florinda", "hasani", "23");
const lis = new Person("lis", "ibrani", "13");
const ylli = new Person("ylli", "gjikolli", "13");



console.log(florinda);
console.log(lis);
console.log(ylli);
