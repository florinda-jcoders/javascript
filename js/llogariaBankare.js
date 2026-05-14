class BankAccount {
  constructor(accountNumber, pin, balance, numriTelefonit) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.numriTelefonit = numriTelefonit;
    this.pin = pin;
    console.log(`Numri i xhirollogarise ${this.accountNumber}`);
    console.log(`Balanca e xhirollogarise suaj eshte ${this.balance}`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Keni depozituar me sukses ${amount} euro. Tani balanca ne xhirollogari eshte ${this.balance}`,
    );
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Keni terhequr me sukses ${amount} euro. Tani balanca ne xhirollogari eshte ${this.balance}`,
      );
    } else {
      console.log(
        `Nuk keni fonde te mjaftueshme. Gjendja e llogarise suaj eshte: ${this.balance}`,
      );
    }
  }

  display() {
    console.log(`Gjendja e llogarise suaj eshte: ${this.balance}`);
  }
}

const nrXhirollogarise = document.getElementById("nrXhirollogarise");
const pinXhirollogarise = document.getElementById("pinXhirollogarise");
const nrTelXhirollogarise = document.getElementById("nrTelXhirollogarise");
const krijoXhirollogarise = document.getElementById("signUpButton");
const krijoLlogarineButton = document.getElementById("krijoLlogarineButton");
const submit = document.getElementById("submitButton");

const allAccounts = [];

submit?.addEventListener("click", () => {
  login(nrXhirollogarise.value, pinXhirollogarise.value);
});
krijoXhirollogarise?.addEventListener("click", () => {
  window.location.href = `./krijoLlogarine.html`;
});
krijoLlogarineButton?.addEventListener("click", () => {
  krijoLlogarine(
    nrTelXhirollogarise.value,
    pinXhirollogarise.value,
    nrTelXhirollogarise.valu,
  );
  setTimeout(() => {
    console.log("Llogaria po krijohet!");
  }, 2000);
  alert(
    `Keni krijuar me sukses llogarine tuaj bankare: ${nrXhirollogarise.value}`,
  );
  window.location.href = `./llogariaBankare.html`;
});

function krijoLlogarine(nrXhiro, pinXhiro, nrTel) {
  const newAcc = new BankAccount(nrXhiro, pinXhiro, 0, nrTel);
  allAccounts.push(newAcc);
}
console.log(allAccounts);
function login(nrXhiro, pin) {
  const loginReq = allAccounts.find((llogaria) => {
    llogaria.accountNumber == nrXhiro && llogaria.pin == pin;
  });
  if (loginReq) {
    console.log("Login me sukses!");
    window.location.href = `./pasqyraETeDhenave.html`;
    return foundAccount;
  } else {
    console.log("Numri i llogarisë ose PIN-i është gabim.");
    console.log(allAccounts);
    return null;
  }
}
