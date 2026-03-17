const listaPyetjePergjigje = [
  {
    question: "Cili eshte kryeqyteti i Kosoves?",
    answer: "Prishtina",
    possibleAnswers: ["heehh", "hehehe", "heehe", "Prishtina"],
  },
  {
    question: "Cili eshte kryeqyteti i Shqiperise?",
    answer: "Tirana",
    possibleAnswers: ["heehh", "hehehe", "heehe", "Tirana"],
  },
];

const quizContainer = document.querySelector(".quiz-container");
let pyetjetEGabuara = [];

listaPyetjePergjigje.forEach((item) => {
  const pyetja = document.createElement("h2");
  pyetja.textContent = item.question;
  quizContainer.appendChild(pyetja);

  item.possibleAnswers.forEach((pergjigja) => {
    const pergjigjaButton = document.createElement("button");
    pergjigjaButton.textContent = pergjigja;

    pergjigjaButton.addEventListener("click", () => {
      if (pergjigja === item.answer) {
        alert("correct");
      } else {
        pyetjetEGabuara.push({
          q: item.question,
          a: item.answer,
        });
        console.log(pyetjetEGabuara);
        alert("incorrect");
      }
    });
    quizContainer.appendChild(pergjigjaButton);
  });
});