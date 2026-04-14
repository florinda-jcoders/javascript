let personi = {
  name: "Florinda",
  surname: "Hasani",
  birthyear: 2002,
  get merrEmrin() {
    return `Hej, une jam ${this.name} ${this.surname}`;
  },
  get merrMoshen() {
    return 2026 - this.birthyear;
  },
  set fullName(vitiLindjes) {
    // [this.name, this.surname] = name.split(' ')
    if (Number.isFinite(vitiLindjes)) {
      this.birthyear = vitiLindjes;
    } else {
      console.log("Nuk eshte numer!!!");
    }
  },
};

personi.fullName = "Test Test";
console.log(personi.merrEmrin);
// function merrInfot() {
//   console.log(personi.merrEmrin);
//   console.log(`Mosha eshte ${personi.merrMoshen}`);
// }
// merrInfot();
