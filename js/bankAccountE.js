class BankAccount {
  #balanca;
  constructor() {
    this.#balanca = 100;
  }
  setParaNeLlogari(pare) {
    this.#balanca += pare;
  }
  getPare(pare) {
    if (this.#balanca != 0 && pare <= this.#balanca) {
      this.#balanca -= pare;
      console.log(`Keni depozituar me sukses ${pare} ne llogarine tuaj.`);
    } else {
      console.log("Nuk keni balance te mjaftueshme ne llogari.");
    }
  }
  getBalancen() {
    return this.#balanca;
  }
}

let llogariaBankare = new BankAccount();
console.log(llogariaBankare.getBalancen());
llogariaBankare.setParaNeLlogari(50);
console.log(llogariaBankare.getBalancen());
llogariaBankare.getPare(150);
console.log(llogariaBankare.getBalancen());
