// console.log("Это файл index.js")

// <------ 1,1 урок ------>

// let a = 123456;
// // let b = 12.44;
// // let c = 0.999;
// // let d = 2_555_777;

// // typeof a;

// console.log(a + "hello") // 123456hello
// console.log(typeof (a)) // number
// console.log(typeof (a + "hello")) // string

// console.log( 1 / 0 ) // Infinity

// console.log('text' - 1123) // NaN
// console.log('text' + 1123) // text1123

// console.log('JS' * 10); // NaN

// console.log(3 + 3)

// let a = 12345678909876543234567876543234567n;
// console.log(typeof a) // bigint

// console.log(2 ** 53);
// console.log(2 ** 3) // 2 * 2 * 2;

// let str = "это я";
// let str1 = 'это я';
// console.log(str === str1); // true

// let str1 = "I'm here";
// console.log(str1)

// let age = 25

// const obj = {
//     name: 'Jasur',
//     surname: "Hamrakulov",
//     age: 16,
//     obj: {
//         arr: [{}, {}, {}],
//     },
// }

// obj.name = 'Said'

// console.log(obj);

// ""
// ''
// ``

// let age = 25

// let str1 =
// ` Мне ${age} лет `;

// console.log(str1);

// console.log(typeof str1);

// let str1 = 'это называется""строка"';

// console.log(str1);

// let a = true;
// console.log(typeof a); // boolean

// let a = 5 > 2;
// console.log(a); // true

// let a = null;
// console.log(typeof a) // object

"use strict";
// jasur = 16
// let jasur = 16
// let jasur

// console.log(jasur);

// let a = undefined;
// let y
// console.log(a); // undefined
// console.log(y); // undefined

// let sym = Symbol("foo");
// let sym2 = Symbol("foo");
// console.log(sym === sym2); // false

// let sym = ("foo");
// let sym2 = ("foo");
// console.log(sym === sym2);

// const person = {name:'Хамракулов', age: 33};
// console.log(typeof person); // object

// const person2 = ["Хамракулов", 33];
// console.log(typeof person2); // object

// console.log(Array.isArray([])); // true

// console.log(Array.isArray({})); // false

// function sum(a, b) {
// return a + b;
// }

// console.log(sum(10, 20));

// console.log(typeof sum); // number
// const error = new Error("Ошибочка вышла-с");
// console.log(typeof error);
// console.log( error);
// let age = 25
// console.log(typeof(age) === 'string'); // false

// console.log(typeof error === "object"); // true
// console.log(typeof(typeof error)); // string

// let a = 5;
// a = true;
// console.log(a, typeof a) // true  boolean

// <------ 1,2 урок ------>

// let a = (b = 5);

// let a = 5;
// let b = true;
// let c = "hello";
// let d = null;

// let e = a;

// let a = 1;

// function example() {
//     console.log(a);
// }

// example();

// let a = 1;

// negatives => 0, false, '', NaN, undefined, null,  -0

// if (-23) {
//     console.log('positive');
// } else {
//     console.log('negative');
// }

// 10 < 5 ? console.log('positive') : console.log('negative');
// console.log(10 > 5); // true
// console.log(10 < 5); // false

// function example() {
//     var localVar = 20;
//     console.log(localVar);
// }

// example();

// console.log(localVar);

// let x = 1;

// function example() {
//     if (x) {
//         y = 10;
//         console.log(y);
//     }
// }

// example();

// let x = 1;

// function example() {
//     if (x) {
//         y = 10;
//         console.log(y);
//     }
// }

// example();
// y = 20
// console.log(y);

// const a = 1;
// a =  2;

// var a = 1;
// var a = 2;

// let a = 1;
// let a = 2;

// let x = 1;
// function example() {
//     if (x) {
//         var y = 10;
//     }
//     console.log(y);
// }
// example();
// console.log(y);

// console.log(y);

// var y = 10;
// console.log(y);

// let userName = "Sasha";
// let test = 123;
// let myName
// let value

// <------ 1,3 урок ------>

// +, -, *, /, **, % ;

// let num = 1 + 3;
// console.log(num);

// let num = 1 - 3;
// console.log(num);

// let num = 5 * 5;
// console.log(num);

// let num = 25 / 5;
// console.log(num);

// let num = 25 ** 5;
// console.log(num);

// let num = 7 % 2;
// let num = 100 % 55
// let num = 100 % 155
// console.log(num);

// let num = '6';
// num = +num;
// num = num;
// console.log(typeof num, num);

// let num = '6';
// num = -num;
// console.log(typeof num, num);

// +2, -2, +0, -0 ;

// let num = parseInt("42.1");
// console.log(num, typeof num)

// let num = parseInt("e42.1"); // NaN number
// let num = parseInt("42er.1"); // 42 number
// console.log(num, typeof num)

// let a = 3 + "2";
// console.log(typeof a, a); // string 32

// console.log(parseInt(3665  / 3600)); // 1
// console.log(parseInt((3665 % 3600) / 60)); // 1
// console.log(parseInt(3665 % 60)); // 5

// let user = 'alex'
// let ageUser  =  30
// let experience = '3 years'

// console.log(
//     `user name is ${user} user age ${ageUser} user experience ${experience}`
// );

// let a = 3 + 5 + "2";
// console.log(typeof a, a); // string 82

// let a = "2";
// let b = "3";

// let c = a + b
// console.log(c) // 23

// let a = "2";
// let b = "3";

// let c = +a + +b
// console.log(c) // 5

// console.log(6 + "2"); // 62
// console.log(6 / "2"); // 3
// console.log(6 * "2");  // 12
// console.log(parseInt("4px") - 2); // 2
// console.log(2 + 3 * 4); // 14

// Инкремент ++
// Декремент --
// let x = 1;
// console.log(x++)
// console.log(x)
// console.log(++x)

// let counter = 1
// console.log(2 * ++counter); //4

// let x = 3;
// x + 5;
// console.log(x);
// x += 5;
// console.log(x);

// let x = 20;
// x /= 5;
// console.log(x);

// let x = 2;
// x *= 3 + 5
// console.log(x);

// alert("будут использованы ваши персональные данные")
// let ans =  confirm("подтвердите согласие на использование персональных данных")
// console.log(ans);
// let message = confirm(
//     "подтвердите согласие на использование персональных данных"
// );
// if(message) {
//     alert("пройдите по ссылке https://github.com/")
// } else {
//     alert("не очень-то и надо");
// }

// let message = confirm(
//     "подтвердите согласие на использование персональных данных"
// );
// if (message) {
//     window.location.href = "https://www.github.com";
// } else {
//     alert("не очень-то и надо");
// }

// prompt('tell us who you are?')

// let age = prompt("сколько лет вам", 22);
// console.log(age);

// if (age === null) {
//     alert("ммм, - да...");
// } else {
//     let year = prompt("какой сейчас год?");
//     alert(`вы родились в ${year - age} году`);
// }
