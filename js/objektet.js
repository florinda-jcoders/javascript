let person = {
  emri: "Florinda",
  mbiemri: "H",
  vitiLindjes: 2002,
  isAbove18: true,
  profesion: "Inxhiniere",
  mosha: function () {
    console.log(2026 - this.vitiLindjes);
  },
};
person.mosha();
console.log(person);

let libraria = {
  emri: "Hivzi Sylejmani",
  raftiLibrave: ["Kthesa", "Zgjimi", "Hijet e Qytetit"],
  numriTotalILibrave: function () {
    return this.raftiLibrave.length;
  },
  shtoLibrinNeRaft: function (libri) {
    this.raftiLibrave.push(libri);
  },
  hiqLibrinNgaRafti: function (libri) {
    this.raftiLibrave.pop(libri)
  }

};

console.log(libraria.numriTotalILibrave());
libraria.shtoLibrinNeRaft("Letra Milenes");
libraria.hiqLibrinNgaRafti("Kthesa")
console.log(libraria.raftiLibrave);
console.log(libraria.numriTotalILibrave());

// console.log("qeni" in person);

// console.log(person);
// console.log(person.isAbove18);

// console.log(person.emri, person.mbiemri);
// console.log(person["mbiemri"]);

// delete person.mosha;
// console.log(person);

// person.id = 12345;
// console.log(person);
// console.log(person.id);

// let personi3 = new Object();
// personi3.emri = "Flo";
// personi3.mbiemri = "Ha";
// personi3.mosha = 25;
// personi3.profesion = "Inxhiniere";

// console.log(personi3);

// let personi2 = ["F", "Has", 25, "Inxhiniere"];
// console.log(personi2);
