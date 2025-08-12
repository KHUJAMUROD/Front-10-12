// const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let printPage = 0;

// while (printPage < pages.length) {
//     if (pages[printPage] % 2 === 1) {
//         printPage++
//         continue;
//     }
//     console.log(`печатается страница ${pages[printPage]}`);
//     printPage++;
// }


// console.log(20%33);

// const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let printPage = 0;

// while (printPage < pages.length) {
//     if (!(pages[printPage] % 2)) {
//         printPage++
//         continue;
//     }
//     console.log(`печатается страница ${pages[printPage]}`);
//     printPage++;
// }

// const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let printPage = 0;

// while (printPage < pages.length) {
//     if (!(pages[printPage] % 2)) {
//         printPage++
//        break;
//     }
//     console.log(`печатается страница ${pages[printPage]}`);
//     printPage++;
// }


// while (true) {
//     const msg = prompt("введите ваши собщение");
//     console.log(msg);
//     if (msg === "stop") {
//         break;
//     }
// }

// const numbers = [1, 2, 0, 3, 4, 0, 5, 6];

// let result = 1;
// let i = 0;

// while (i < numbers.length) {
//     if (numbers[i] === 0) {
//         i++;
//         continue;
//     }
//     result *= numbers[i];
//     i++
// }
// console.log(`произведения чисел не равных 0: ${result}`);

// while (true) {
//     let msg = prompt("введите собщения");
//     if (msg === "next") continue;

//     console.log(msg);
//     if (msg === "stop") break;
// }

// <------ 1,14 урок ------>

//  let i = 0;
//   while ( i <= 5){
//     console.log(i);
//     i++
//   }


// for (let i = 0, b = 5, c = 10 ; i <= 5 ; i++, b++, c++) {
//     console.log(i);
//     console.log(b);
//     console.log(c);
// }


// <------ 1,15 урок ------> 

// let a = prompt("введите первое число");
// let b = prompt("введите второе число");
// let mult = a * b;
// console.log(`проиведения двух чисел равняется ${mult}`);



// let a = prompt("введите первое число");
// let b = prompt("введите второе число");
// function multiply(a, b) {
//     let mult = a * b;
//     return console.log(`проиведения двух чисел равняется ${mult}`);
// }

// multiply(a, b);
// console.log(multiply(a, b));


// while (true) {
//     const age = +prompt("введите свой возраст").trim();
//     if(age) {
//         console.log(age);
//         break;
//     }
// }

// while (true) {
//     const salary = +prompt("введите свой доход").trim();
//     if (salary) {
//         console.log(salary);
//         break;
//     }
// }

// while (true) {
//     const term   = +prompt("укажите срок кредитования в месяцах").trim();
//     if (term) {
//         console.log(term);
//         break;
//     }
// }

// function getUserInput(question) {
//     while (true) {
//         const input = +prompt(question).trim();
//         if (input) {
//             console.log(input);
//             break;
//         }
//     }
// }

// getUserInput("введите свой возраст")
// getUserInput("введите свой доход")
// getUserInput("укажите срок кредитования в месяцах")

// function multiply(a, b) {
//     let mult = a * b;
// }
// console.log(multiply);

// function multiply(a, b) {
//     let mult = a * b;
// }
// console.log(multiply(5, 4));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 4));



// const result = function multiply(a, b){
//     return a * b;
// };



// const multResult = result(3, 5);
// console.log(multResult);
// console.log(result);

// console.log(result(3, 5));


// function unknown() {
//     function multiply(a, b) {
//         // a, b- параиетр
//         let mult = a * b;
//         console.log(`произведения двух чисел равняется ${mult}`);
//     }
//     multiply(5, 4);
//     //агрумент вызова
//     function sayHello() {
//         console.log("hello");
//     }
//     sayHello();
// }

// unknown();
// multiply(5, 4);


// function multiply(a, b) {
//     return a * b;
// }


// console.log(multiply(2, 4));



// function calculate(x, y) {
//     let result = multiply(x, y);
//     console.log(`произведение чисел равно ${result}`);
// }

// calculate(3, 4)
// ////////////

// function multiply(a, b = anotherFunc()) {
//     let mult = a * b;
//     console.log(` произведения двух чисел раняется ${mult}`);
// }

// function anotherFunc() {
//     return 5;
// }


// multiply(2);


// let f = function (a, b) {
//     return a * b
// }

// console.log(f(2, 4));

// const x = (x, y) => { return x * y };

// console.log(x(4, 5));


// <------ 1,16 урок ------>

// let isVaccinated = true;

// let cat = {
//     age: 5,
//     weigth: 3,
//     name: "Мурзик",
//     isVaccinated
// };

// cat = 10;

// console.log(cat);


// let isVaccinated = true;

// const cat = {
//     age: 5,
//     weigth: 3,
//     name: "Мурзик",
//     isVaccinated
// };


// console.log(cat);


// let isVaccinated = true;

// const cat = {
//     age: 5,
//     weigth: 3,
//     name: "Мурзик",
//     isVaccinated
// };

// cat.isPedigree = true;
// console.log(cat);

// console.log(cat.name);
// console.log(cat.age);
// console.log(cat.weigth);
// console.log(cat.isVaccinated);


// const user = {
//     name:"Jasur",
//     age: 16,
//     height: 170,
// };

// let info = prompt(
//     "что вы хотите узнать о пользователя?",
//     "имя, возраст или рост"
// );

// user[info] = 'first name'
// console.log(user);
// console.log(user[info]);
