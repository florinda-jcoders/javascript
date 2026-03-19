const numri = -7;
let vleraENumrit = new Promise(function (resolve, reject) {
  if (numri > 0) {
    resolve("Numri eshte pozitiv");
  } else {
    reject("Numri eshte negativ");
  }
});

console.log(vleraENumrit);

function merrTeDhena() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        const msg = "Vlera eshte me e madhe se 0.5";
        console.log(msg);
        resolve(msg);
      } else {
        const msg = "Vlera eshte me e madhe se 0.5";
        console.log(msg);
        reject(msg);
      }
    }, 6000);
  });
}

merrTeDhena();

const numrat1 = [1, 2, 3];
const numrat2 = [4, 5, 6];
const join = [...numrat1, ...numrat2];
console.log(join);
