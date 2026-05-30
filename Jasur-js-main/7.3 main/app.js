// 1 //
const c = 10;
let d = 20;

function sum(a, b) {
    if (c) return a + b + c;
}

export  { sum, d };

// 2 //

// import { c as secondC } from "./second.js";

// const c = 10;
//  let d = 20;

// function sum(a, b){
//     if (c) return a + b + c + secondC;
// }

// export { sum, d };

// 3  //

// const c = 10;

// let d = 20 + c;

// function sum(a, b){
//     if (c) return a + b + c;
// }

// export { sum, d, c };

// 4 //

// const c = 10;
// let f = 5

// function sum(a, b){
//     if (c) return a + b + c;
// }

// export {sum as default};

// export { c, f }

// 5 // 

// import shuffle from "lodash/shuffle.js";

// const array = [1, 2, 3, 4, 5];

// export const shuffleArray = shuffle(array);

// console.log(shuffleArray);

// export const a = 10;

// 6 //

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// exports.param = 10;
// exports.add = add;
// exports.subtract = subtract;

// 7 //

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// module.exports = {
//     add,
//     subtract,
//     param: 10,
// };

