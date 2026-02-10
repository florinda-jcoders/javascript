const fjalet = [
  "javascript",
  "hangman",
  "programming",
  "developer",
  "algorithm",
];

const fjala = fjalet[Math.floor(Math.random() * fjalet.length)];

const karakteret = Array(fjala.length).fill("_");

let shkronjatEPerdorura = [];

let tentimet = fjala.length;

// test
// _ _ _ _
// perdoret while loop shkaku qe duhemi me lyp input
// deri sa te kemi tentime ose s ja kemi qellu fjales
while (tentimet > 0 && karakteret.includes("_")) {
  // mesazhi qe i shfaqet userit
  let mesazhi =
    `Fjala: ${karakteret.join(" ")} \n` +
    `Tentimet e mbetura: ${tentimet} \n` +
    `Shkronjat e provuara: [${shkronjatEPerdorura.join(", ")}]`;

  // prompt qe i del userit
  let karakteri = prompt(mesazhi + "\nShkruani nje shkronje:");

  // nese karakteri eshte null hapesire boshe mos vazhdo ma tutje
  if (karakteri === null) break;
  // H => h
  // hello != Hello
  karakteri = karakteri.toLowerCase();
  //  validimin nese nuk ka jep space ose nese jane me shume shkronja
  if (karakteri.length !== 1) {
    alert("Ju lutem jepni vetem nje shkronje");
  }
  if(karakteri === " "){
    alert("Ju lutem mos jepni hapesire!");
  }
  // kur array i shkronjave te perdorura e permbane
  // shkronjen te cilen e ka dhene useri
  if (shkronjatEPerdorura.includes(karakteri)) {
    alert("Ju e keni perdorur kete shkronje me pare");
    continue;
  }

  shkronjatEPerdorura.push(karakteri);

  if (fjala.includes(karakteri)) {
    for (let i = 0; i < fjala.length; i++) {
      // fjala: test  karakteri = s
      // fjala[0] = t => t===s => fjala[0] = karakteri
      if (fjala[i] === karakteri) {
        karakteret[i] = karakteri;
      }
    }
    alert(`E sakte. Shkronja ${karakteri} ndohet ne fjale!`);
  } else {
    tentimet--;
    alert("Shkronja e dhene nuk ndodhet ne fjale.");
  }
}
// e kthen a ka a s ka qat karakter
// karakteret.includes("_") nese ka true
if (!karakteret.includes("_")) {
  alert(`Urime e keni gjetur fjalen. ${fjala}`);
} else {
  alert(`Nuk e keni gjetur fjalen. Fjala ka qene: ${fjala}`);
}
