// function mult (a, b) {
//     let result = a * b;
//     console.log(`произведения чисел a и b равняется ${result}`);
// }

// mult(2, 3);


// const mult = function (a, b) {
//     let result = a * b;
//     console.log(`произведения чисел a и b равняется ${result}`);
// }

//  mult(2, 3);



// const mult = function (a, b) {
//     return a * b;
// };

// const product1 = mult(2, 3);
// const product2 = mult(4, 5);

// console.log(product1, product2);

// const sumOfProducts = product1 + product2;
// console.log(sumOfProducts);


// sayHello();

// function sayHello() {
//     console.log("привет");
// }


// let age = 16;

// if (age < 14) {

//     function printMessage() {
//         console.log("привет");
//     }
// } else {
//     function printMessage() {
//         console.log("здраствуйте");

//     }
// }

// printMessage()

// "use strict"
// let age = 16;
// let printMessage;


// if (age < 18) {
//     printMessage = function () {
//         console.log("привет");
//     }
// } else {
//     printMessage = function () {
//         console.log("здраствуйте");
//     }
// }
// printMessage()





// const sum = (a, b) => {
//   return  a + b;
// };


// const mult = (a, b) => {
//   return  a * b;
// };


// console.log(sum(3, 5), mult(5, 6));


// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b;
// console.log(sum(3, 5), mult(5, 6))


// let result = (a) => a * 2;
// console.log(result(5));


// const sum = (a, b) => {
//     let c = 3;
//     return a + b * c;
// };
// console.log(sum(3, 8));



// const sum = (a, b, c = 3) => a + b * c;
// console.log(sum(3, 8));



// const myFunction = (a, b) => {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// };
// console.log(myFunction(2, 3));



// const obj = {
//     add: (a, b) => {
//         let c;
//         a = a + 1;
//         c = a + b;
//         return c;
//     },
// };
// const result = obj.add(3, 9);
// console.log(result);



// const obj = {
//     value: 42,
//     getValue: function (){
//         return this.value;
//     },
// };
// console.log(obj.getValue());



// function showText() {
//     let text = "Hello";
//     console.log(text);
// }
// showText();
// console.log(text);




// let user = "bob";
// function showText() {
//     user = "John"
//     let text = `Hello, ${user}`;
//     console.log(text);
// }
// console.log(user);
// showText();
// console.log(user);



// let user;
// function showText(userName0) {
//     user = "userName1"
//     let text = `Hello, ${user}`;
//     console.log(text);
// }
// console.log(user);
// showText("bob");
// console.log(user);




// function showText(userName) {
//     let user = userName;
//     let text = `Hello, ${user}`
//     console.log(text);
//     printGreeting(user);
// }

// showText("bob");
// function printGreeting(user) {
//     user = 'bob2'
//     console.log(user);
// }



// const multiply = (b, a) => a / b;
// const calculate = (x, y) => {
//     let result = multiply(x, y)
//     console.log(`частное от деления чисел ${x} и ${y} равно ${result}`);
// };
// calculate(3, 4);




// const calculate = (x, y) => {
//     let result = multiply(y);
//     console.log(`частное от деления чисел ; ${y} и ${x} равно ${result}  1`);
// };


// calculate(3, 4);

// function multiply(b, a = 7) {
//     let result =  a / b;
//     console.log(`частное от деления чисел ; ${a} и ${b} равно ${result}  2`);
//     return result
// }










// const multiply = (a, b = anotherFn()) => {
//     let mult = a * b;
//     console.log(`произведения двух чисел равняется ${mult}`);
// };
// multiply(2);
// function anotherFn() {
//     return 10 / 2;
// }




// function add(a, b) {
//     return a + b;
// }

// function multiply(x, y) {
//     return x * y;
// }
// const result = multiply(add(2, 3), 4);
// console.log(result);




// const add = (a, b) => a + b;

// const multiply = (x, y) => x * y;

// const result = multiply(add(2, 3), 4);

// console.log(result);








// let a = 3;

// let b = a + 1;
// let c = a + 2;
// let d = a + 3;
// function plusNum(num) {
//     return a + num;
// }
// console.log(plusNum(5));



// let a = 3;

// function plusNum(num) {
//     return a + num;
// }

// function minusNum(num) {
//     return a - num;
// }

// function multiplyNum(num) {
//     return a * num;
// }

// function davideNum(num) {
//     return a / num;
// }
// console.log(plusNum(5));


// let a = 3;

// function plusNum(num) {
//     result = a + num;
//     console.log(result);
    
// }

// function minusNum(num) {
//     result = a - num;
//     console.log(result);
    
// }

// function multiplyNum(num) {
//     result = a * num;
//     console.log(result);
    
// }

// function davideNum(num) {
//     result = a / num;
//     console.log(result);
    
// }
// plusNum(5);




// let a = 3;

// function plusNum(num) {
//     result = a + num;
//     console.log(result);
    
// }

// function minusNum(num) {
//     result = a - num;
//     console.log(result);
    
// }

// function multiplyNum(num) {
//     result = a * num;
//     console.log(result);
    
// }

// function davideNum(num) {
//     result = a / num;
//     console.log(result);
// }

// function calculate(mathFn, num) {
//     mathFn(num)
// }
// calculate(davideNum, 4);

// let a = 3;
// const plusNum = (num) => a + num;
// const minusNum = (num) => a - num;
// const multiplyNum = (num) => a * num;
// const davideNum = (num) => a / num;

// function calculate(mathFn, num) {
//     let result = mathFn(num);
//     console.log(result);
// }
// calculate(davideNum, 4)

// const paramA = () => 3;
// const paramB = () => 4;
// const paramC = () => 5;

// const plusNum = (x, y) => x + y;
// const minusNum = (num, paramValue) => paramValue - num;
// const multiplyNum = (nifNif, NufNuf) => nifNif * NufNuf;
// const davideNum = (c, d) => d / c;

// function calculate(mathFn, num, param) {
//     const paramValue = param();
//     let result = mathFn(num, paramValue);
//     console.log(result);
// }
// calculate(multiplyNum, 6, paramB);


// const numbers = [1, 2, 3, 4, 5];
// function processArray(numbers) {
//     const result = [];
//     for (let index = 0; index < numbers.length; index++){
//         result.push(numbers[index]);
//     }
//     console.log(result);
//     return result;
// }

// function double(num) {
//     return num * 2;
// }

// function square(num) {
//     return num ** 2;
// }

// console.log(processArray(numbers, double));
// console.log(processArray(numbers, square));


// const numbers = [1, 2, 3, 4, 5];

// function processArray(numbers, callback) {
//     const result = [];
//     for (let index = 0; index < numbers.length; index++){
//       result.push(callback(numbers[index]));
//     }
//     return result;
// }

// function double(num) {
//     return num * 2;
// }

// function square(num) {
//     return num ** 2;
// }

// function operation(num) {
//     return (num ** 2 / 7 + 1).toString()
// }

// console.log(processArray(numbers, double));
// console.log(processArray(numbers, square));
// console.log(processArray(numbers, operation));




// function greeting() {
//     console.log("Hello, my dear friend!");
// }

// function by() {
//     console.log("Goodbye, my dear friend!");
// }

// function border(callback) {
//     console.log("------Start------");
//     callback();
//     console.log("------Finish------");
// }
// border(greeting);
// border(by);


// function onButton(callback) {
//     const button = document.querySelector("#myButton");
//     button.addEventListener("click", callback);
// }

// function onEnterPress(callback) {
//     const input = document.querySelector("#myInput");
//     input.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             callback()
//         }
//     })
// }

// function onInputLength(callback) {
//     const input = document.querySelector("#myInput");
//     input.addEventListener("input", function () {
//         if (input.value.length === 4) {
//             callback();
//         }
//     });
// }
// function handleEvent() {
//     console.log("Hello, I from Uzbekistan! ");
//     window.open("https://www.example.com", "_blank")
// }

// onButton(handleEvent);
// onEnterPress(handleEvent);
// onInputLength(handleEvent);
//======================================================================

// jasur chtu tu uka

//======================================================================

// nagz hudat nagzmi 

//======================================================================