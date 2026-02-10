let nxenesit = ["Mal", "Lis", "Yll"];
// 0 ,  1,  , 2

console.log(nxenesit.length)

console.log(nxenesit[2]);
let numrat = [1, 2, 3, 4];

console.log("array" ,removeElementFromArray(numrat,2))
function removeElementFromArray(array, index) {
  array.splice(index, 1);
  return array;
}



