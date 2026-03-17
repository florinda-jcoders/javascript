import { add } from "../js/mathFunctions.js";
// import { checkPasswordForUser } from "../js/mathFunctions.js";
import { formatDay } from "../helpers/formatDay.js";


// console.log(checkPasswordForUser("hasani@gmail.com", "florinda1234"));
// Tue Mar 17 2026 18:38:43 GMT+0100 (Central European Standard Time)

const data = Date();
const day = data.slice(0, 3);
const date = data.slice(4,15)

console.log(formatDay(day));
