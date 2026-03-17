let select = document.querySelector(".nxenesit");
let paragrafi = document.querySelector(".paragrafi");

select.addEventListener("change", () => {
  paragrafi.innerHTML = "Hello, " + select.value + "!";
});


let paragrafiRi = document.createElement('p')
paragrafiRi.innerHTML = "Ky eshte nje paragraf i ri i krijuar me JS";

document.body.appendChild(paragrafiRi);

console.log(paragrafi.style.color)
console.log(paragrafi.style.backgroundColor)