//1-usul
module.exports.add = (a, b) => {
    return a + b
}

module.exports.subtract = (a, b) => {
    return a - b;
}

//chaqirib ishlatish
/*
const { add, subtract } = require("./functions");
console.log(add(5, 5))
console.log(subtract(10, 5))
*/

//2-usul
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b;
}

module.exports = { addFn: add, subtract }

//chaqirib ishlatish
/*
const { addFn, subtract } = require("./functions");
console.log(addFn(5, 5))
console.log(subtract(10, 5))
*/

