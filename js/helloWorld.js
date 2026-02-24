// let message = document.querySelector(".message");
// console.log(message.textContent);

// message.textContent = "Hello World!!!!!"
// console.log(message.textContent);

// let p = document.querySelector("#welcome")
// console.log("With Query Selector", p.textContent)

// let paragraph = document.getElementById("welcome")
// console.log("With Element by ID", paragraph.textContent)

// let elementetNgaKlasa = document.getElementsByClassName("message")
// console.log("Elementet nga klasa:", elementetNgaKlasa)

// const body = document.querySelector("body")
// body.style.background = "#ffffff"

// document.querySelector("body").style.background = "#8f4949"

// let welcomeText = document.querySelector("#welcome");

// welcomeText.textContent = "E kemi selektu kete tekst duke perdorur JS";
// welcomeText.style.color = "black";

// document.body.style.backgroundColor = "green";

// let butoni = document.querySelector(".kliko");
// let paragrafi = document.getElementById("paragrafi");

// function changeColor() {
//   paragrafi.style.color = "red";
// }

// butoni.addEventListener("click", changeColor);
// function selekto() {
//   alert("Teksti u selektua");
// }

let input = document.querySelector(".inpSearch");

input.addEventListener("search", () => {
  alert("Ju keni kerkuar: " + input.value);
});
