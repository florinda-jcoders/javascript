const regex1 = /[a-c]/;
const regex2 = new RegExp("a-b");

const regex1withFlags = /[j]/gi;
const regex2withFlags = new RegExp(["a-c"], "g");

let emri = "jcoders";
let emri2 = "jcoders Jcoders";

console.log(regex1.exec(emri));
console.log(regex2.test(emri));

console.log(emri2.match(regex1withFlags));



const gjejFjaletMeB = /\bb\w*/g;
let fjalia = "beni beri bubin te ec";
let fjalet = fjalia.match(gjejFjaletMeB);
console.log("fjalet", fjalet);
console.log("fjale e pare", fjalet[0]);
console.log("numri i fjaleve me b eshte: ", fjalet.length);
