// let regexp1 = new RegExp('^[а-яА-Я]*$');
// let regexpFlag = new RegExp('^[а-яА-Я]*$', 'gmi');



// let regexp2 = /^[а-яА-Я]*$/;
// let regexpFlag2 = /^[а-яА-Я]*$/gmi;


//  let str = 'my name Jasur. my full name is Jasur Khamrakulov';
//  console.log(str.replace(/Jasur/i, "JUSTIN#"));

//  let str = 'my name Jasur. my full name is Jasur Khamrakulov';
//  console.log(str.replace(/Jasur/gi, "JUSTIN#"));

//  let str = 'my name Jasur. my full name is Jasur Khamrakulov';
//  console.log(str.match(/jasur/gi));

//  let str = 'My name Jasur. my full name is Jasur Khamrakulov';
//  console.log(/jasur/gi.exec(str));


// let regexp = /^[а-яА-Я]*$/ ;

// let nameUser = prompt('Введите ваше имя на кирилице');

// if (regexp.test()) {
//     alert("ваше имя сохранено")
// }else {
//     alert("введены некорртиные символ");
// }


// const families = [
//     "Иванов А.А.",
//     "Иванова В.В.",
//     "Ивановский Г.Г.",
//     "Ивановский Г.Г.",
//     "Иванченко Д.Д.",
// ];

// let person = prompt("Введите фамилю");

// let regexp = new RegExp(`${person}`)

// families.forEach((el) => {
//     if(regexp.test(el)) {
//         console.log(el);
//     }
// });


// let regexp = /^П/;
// console.log(regexp.test('Пирог'));
// console.log(regexp.test('Вкусный пирог'));
// console.log(regexp.test('пирон'));
// console.log(regexp.test('Пирон'));

// let regexp = /[abc]/;
// console.log(regexp.test('button'));
// console.log(regexp.test('word'));
// console.log(regexp.test('cat'));
// console.log(regexp.test('read'));



// let regexp = /[d$]/;
// console.log(regexp.test('button'));
// console.log(regexp.test('word'));
// console.log(regexp.test('cat'));
// console.log(regexp.test('read'));


// let regexp = /^[а-яА-Я]*$/;
// console.log(regexp.test(""));
// console.log(regexp.test("Abc"));
// console.log(regexp.test("АбвAbc"));
// console.log(regexp.test("Абв"));


// let regexp = /^[а-яА-Я]+$/;
// console.log(regexp.test(""));
// console.log(regexp.test("Abc"));
// console.log(regexp.test("АбвAbc"));
// console.log(regexp.test("Абв"));


// let regexp = /[0-9]{6}/;
// console.log(regexp.test("987985"));
// console.log(regexp.test("98798"));
// console.log(regexp.test("987asd234"));
// console.log(regexp.test("983217asd"));

// let regexp = /\d{6}/;
// console.log(regexp.test("987985"));
// console.log(regexp.test("98798"));
// console.log(regexp.test("987asd234"));
// console.log(regexp.test("983217asd"));


// function greet(name) {
//     return "Привет, " + name + "!";
// }

// let message = greet("Алиса");
// console.log(message);


// function add(a, b, c = 2) {
//     return a + b - c;
// }

// let result = add(9, 5, 10);
// console.log(result);    


// function noReturn() {
    
// }
// let result = noReturn();
// console.log(result);


// let greet = function(user) {
//     return "Привет, " + user + "!"
// }
// console.log(greet("Алиса"));


// let greet = user => "Привет, " + user + "!"

// console.log(greet("Алиса"));



// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(5, 9));


// function isEven(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));


// function isEven(number) {
//     return number % 2;
// }
// console.log(isEven(4));
// console.log(isEven(7));



// function sumArray(arr) {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];    
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// function noReturn() {
//     console.log("эта функция ничего не возвращает");
// }
// let result = noReturn();
// console.log(result);




 