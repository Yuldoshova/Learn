//1-usul
// export const add = (a, b) => {
//     return a + b
// }

// export const subtract = (a, b) => {
//     return a - b
// }

//chaqirib ishlatish
/*
import { add, subtract } from "./module.js";
console.log(add(5, 5))
console.log(subtract(10, 5))
*/


//2-usul
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

export default { add, subtractFn: subtract }

//chaqirib ishlatish
/*
import moduleFn from "./module.js";
console.log(moduleFn.add(5,5))
console.log(moduleFn.subtractFn(10, 5))
*/