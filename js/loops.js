for (let i = 0; i < 5; i++) {
  // 0 , 0 < 5 -> console.log("Iteration number: " + i); 0 = 1
  console.log("Iteration number: " + i);
}

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

let dritaNdezur = true;

while (dritaNdezur) {
  console.log("Mundesh me pa");
  dritaNdezur = false;
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

for (let i = 3; i <= 29; i++) {
  if (i % 2 != 0) {
    // console.log("Numri tek eshte " + i);
  }
}

for (let i = 12; i > -14; i--) {
  if (i % 2 === 0) {
    // console.log(i)
  }
}

let shuma = 0;
let numri = 1;
while (numri < 50) {
  shuma = shuma + numri;
  numri++;
}

// console.log(shuma);

// Given an array arr. The task is to find the largest element in the given array.

// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest.
// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100

// array = [2,3,4,5]
function gjejNumrinMeTeMadh(array) {
  let max = array[0]; // array[0] = 2
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      // array[i] = i = 1   array[1] = 3
      max = array[i];
    }
  }
  return max;
}

const arr = [20, 10, 20, 4, 100];
console.log(gjejNumrinMeTeMadh(arr));

function gjejNumrinMeTeVogel(array) {
  let min = array[0]; // array[0] = 2
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      // array[i] = i = 1   array[1] = 3
      min = array[i];
    }
  }
  return min;
}

const arr2 = [20, 10, 20, 4, 100];
console.log(gjejNumrinMeTeVogel(arr2));

// Given an array arr[] of n integers, calculate the average of all the elements.
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: 3.0
// Explanation: Sum is 1 + 2 + 3 + 4 + 5 = 15 / 5 = 3.
// Input: arr[] = [10, 20, 30]
// Output: 20.0

function gjejMesataren(numri) {
  let shuma = 0;
  for (let i = 0; i < numri.length; i++) {
    shuma += numri[i];
  }
  console.log(shuma / numri.length);
}

gjejMesataren([1, 2, 3, 4, 5]);

function numberToArray(num) {
  return Array.from(String(num), Number);
}

// Example usage:
const number1 = 12121345;
const array1 = numberToArray(number1);

function aPjestohet(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (number % array[i] == 0) {
      console.log(
        "Numri " + number + " eshte i plotepjestueshem me " + array[i],
      );
    }
  }
}
aPjestohet(number1, array1);