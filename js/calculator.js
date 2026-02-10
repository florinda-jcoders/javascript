const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

let currentNumber = "";
let previousNumber = "";
let operator = "";

buttons.addEventListener("click", function (e) {
  const value = e.target.getAttribute("data-value");

  if (value === "AC") {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.value = "";
  } else if (value === "=") {
    if (previousNumber !== "" && currentNumber !== "" && operator !== "") {
      let rezultati = 0;

      switch (operator) {
        case "+":
          rezultati = Number(previousNumber) + Number(currentNumber);
      }

      display.value = rezultati;
      currentNumber = rezultati.toString();
      previousNumber = "";
      operator = "";
    }
  } else if (
    value === "+" ||
    value === "/" ||
    value === "%" ||
    value === "-" ||
    value === "*" 
  ) {
    
  }
});
