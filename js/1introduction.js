


// // const arr = [1, 2, 3];

// // console.log(arr)

// // const obj = {a: 1, b: 2};


// // console.log(2*4 == 9);


// // console.log('8' === 8);


// function factorial(n) {
//     if (typeof (n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }

//     // Более короткий вариант, который вы можете встретить
//     // Но не учитывает отрицательные значения
//     return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50250
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// console.log(isBudgetEnough(shoppingMallData));


// let obj = {
//     user1: 'Alex',
//     user2: 'Bredd'
// }

// let { user1, user2 } = obj

// console.log(user1);
// console.log(user2);


// let quastion = prompt('how old are you', '')


// console.log(typeof(quastion));


"use stric"

let number = 4.6;
let number2 = 4;

console.log(Number.isInteger(number));
console.log(Number.isInteger(number2));


console.log(4 / 0);
console.log(-4 / 0);
console.log('string' * 9);

const persone1 ='Alex'; //string

const persone2 = 5;   //number

const bool1 = false; //boolean
const bool2 = true;  // boolean


console.log(something);  //null

let und; 
console.log(und); //undefined

const obj = {
    name: "John",
    25: 'age',
    isMarrier: false
}

console.log(typeof(obj));  // object


// console.log(obj[name]); // null 
console.log(obj.name);  // John
console.log(obj['name']);  // John
console.log(obj['25']);  // age
console.log(typeof(obj[25]));  // string

// 0           1           2   3           4
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1])



