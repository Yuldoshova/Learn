//=============================CommonJS=============================

// const { add, subtract } = require("./functions");
// console.log(add(5, 5))
// console.log(subtract(10, 5))

// const { addFn, subtract } = require("./functions");
// console.log(addFn(5, 5))
// console.log(subtract(10, 5))



//=============================ESModule=============================

// import { add, subtract } from "./module.js";
// console.log(add(5, 5))
// console.log(subtract(10, 5))

import moduleFn from "./module.js";
console.log(moduleFn.add(5,5))
console.log(moduleFn.subtractFn(10, 5))