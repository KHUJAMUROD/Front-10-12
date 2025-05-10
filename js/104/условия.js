'use strict'


if (1) {
    console.log('Ok!');

} else {
    console.log('Error');
}



if (num < 49) {
    console.log('Error');
} else if  (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

const num = 80;


(num === 60) ? console.log('equal 50') : 
(num === 50) ? console.log('equal 60') : 
(num === 70) ? console.log('equal 70') : 
(num === 80) ? console.log('equal 80') : console.log('error');



const hamburger = 2;
const fries = 1;
const cola = 0
// if (hamburger && fries){
//     console.log('я сыт');
// }

console.log(hamburger === 3 && fries && 1 < 2);

console.log(hamburger === 3 || fries === 2 || cola === 0);

console.log(2 * 4 === '8' && 10 > 12 || 5 * 2 === 10 && typeof("тимур балбес") === typeof("имрон балбес"));

console.log(2 + 2 && 4 + 3 && 10 + 5);
console.log(2 + 2 || 4 + 3 || 10 + 5);


console.log(typeof(2));
console.log(typeof("2"));
console.log(typeof({}));
console.log(typeof([]));
console.log(Array.isArray({}));
console.log(Array.isArray([]));

