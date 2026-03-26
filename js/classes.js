class Fustani {
  constructor(marka, ngjyra) {
    this.marka = marka;
    this.ngjyra = ngjyra;
  }

  vendosNgjyren(ngjyra) {
    this.ngjyra = ngjyra;
  }
}

let fustaniDasmes = new Fustani("Rosa", "White");

console.log(fustaniDasmes);

fustaniDasmes.vendosNgjyren("Milky White");

console.log(fustaniDasmes);

class Libraria {
  constructor(emriLibrit, autoriLibrit) {
    this.emriLibrit = emriLibrit;
    this.autoriLibrit = autoriLibrit;
    this.librat = [];
  }
  shtoLiber(emriLibrit, autoriLibrit) {
    const libri = emriLibrit + " - " + autoriLibrit;
    this.librat.push(libri);
  }
  shfaqLibrat() {
    console.log(this.librat);
  }
}

let newLibrary = new Libraria();
newLibrary.shtoLiber("hehe", "jeje");
newLibrary.shtoLiber("Lulet e Veres", "Naim Frasheri");
newLibrary.shfaqLibrat();

class Room {
  constructor(roomNumber, type, isAvaliable) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.isAvaliable = isAvaliable;
    this.dhomatAvaliable = [1, 2, 3, 4, 5];
    this.dhomatERezervuara = [];
  }

  rezervo(numrinEDhomes) {
    if (
      !this.dhomatERezervuara.includes(numrinEDhomes) &&
      this.dhomatAvaliable.includes(numrinEDhomes)
    ) {
      this.dhomatERezervuara.push(numrinEDhomes);
      console.log(`Dhoma me numer ${numrinEDhomes} u rezervua me sukses.`);
    } else {
      console.log(`Dhoma me numer ${numrinEDhomes} eshte e nxene.`);
    }
  }
}

let rezervoNjeDhome = new Room();
rezervoNjeDhome.rezervo(2);
rezervoNjeDhome.rezervo(2);

rezervoNjeDhome.rezervo(3);
rezervoNjeDhome.rezervo(3);
