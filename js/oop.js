// function greet() {
//   console.log("Pershendetje");
// }

// greet.language = "Albanian";

// console.log(greet.language);

// console.log(florinda);
// console.log(lis);
// console.log(ylli);

// let personi = {
//   emri: "Florinda",
//   vitiILindjes: 2002,
//   profesioni: "Inxhiniere",
//   pershendetje:  function(){
//     console.log(`Pershendetje ${this.emri}. Profesioni yt eshte ${personi.profesioni}`)
//   },
//   llogaritMoshen: function (){

//   }
// }

// personi.pershendetje()

// function Personi(emri, mbiemrin, mosha) {
//   this.emri = emri;
//   this.mbiemrin = mbiemrin;
//   this.mosha = mosha;
// }

// const personi1 = new Personi("Florinda", "Hasani", 23);
// const personi2 = new Personi("Mal", "Kasemi", 14);

// console.log(personi1);

class Automjeti {
  constructor(marka, ngjyra) {
    this.marka = marka;
    this.ngjyra = ngjyra;
  }

  vendosNgjyren(ngjyra) {
    this.ngjyra = ngjyra;
  }
}


const llamboUrus = new Automjeti("Urus", "Pink")
llamboUrus.vendosNgjyren("Purple")

console.log(llamboUrus.marka)
console.log(llamboUrus.ngjyra)
