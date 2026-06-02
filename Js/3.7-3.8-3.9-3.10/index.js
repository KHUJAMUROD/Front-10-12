// function someFn() {
//     return someFn();
// }

// someFn(); 

// function factorial(n) {
//     return  factorial(n - 1);
// }
// console.log(factorial(4));


// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(4));

// 4 * 3 * 2 * 1 = 24


// let result = 1;

// for (let index = 2; index <= 5; index++ ) {

//     result = result * index;

// }
//  1 * 2 * 3 * 4 * 5 = 120

// console.log(result);


// let myArray = [2, 4, 6, 8, 10];

// function getLength(arr) {

//     if (arr.pop() === undefined) {
//         return 0;
//     }
//     return 1 + getLength(arr);
// }

// let length = getLength(myArray);
// console.log("длина массива: " + length);


// let multiplier;

// multiplier = 2;

// let result = function (number) {
//     return number * multiplier;
// };

// console.log(result(5));

// multiplier = 3;

// console.log(result(5));



// let multiplier;

// multiplier = 2;
// {
//     let result = function (number) {
//         return number * multiplier;
//     };

//     console.log(result(5));

//     multiplier = 3;
//     console.log(result(5));
// }


// function createMultiplier(multiplier) {
//     console.log(multiplier);
//     return function (number = 3, multiplier = 5) {
//         // console.log(multiplier);
//         return console.log(number * multiplier)
//         ;
//     };
// }

// createMultiplier(2)
// createMultiplier(3)


// function createMultiplier(multiplier) {
//     console.log(multiplier);
//     return function (number) {
//         console.log(multiplier);
//         return number * multiplier;
//     };
// }

// console.log(createMultiplier(2));
// console.log(createMultiplier(3));


// function createMultiplier(multiplier) {
//     console.log(multiplier);
//     return function (number) {
//         console.log(multiplier);
//         return number * multiplier;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double);
// console.log(triple);


// function createMultiplier(multiplier) {
//     console.log(multiplier);
//     return function (number) {
//         console.log(multiplier);
//         return number * multiplier;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double);
// console.log(triple);


// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


// function createPerson(name) {
//     let age = 17;
//     return {
//         name: 'shoxrux',
//         age: 20,
//         getName() {
//             return name;
//             // return this.name;
//         },
//         getAge() {
//             return age;
//             // return this.age;
//         },
//         celebrateBirthday() {
//             return ++age;
//         },
//     };
// }

// const person = createPerson("Alice");

// console.log(person.age); //20
// console.log(person.getAge()); //17
// console.log(person.getName()); // Alice
// console.log(person.celebrateBirthday()); //18
// console.log(person.getAge()); // 18
// console.log(5 * 60 * 60 * 1000);


// let currentDate = Date.now() + 5 * 60 * 60 * 1000;
// let DateNow = new Date(currentDate) ;
// console.log(DateNow);


// let myDate = new Date().getHours();
// console.log(myDate);

// let searchDate = myDate ;
// 
// console.log(searchDate);



// let myDate = new Date("25 october 2025");
// let myDate = new Date ("10/26/2025");
// console.log(myDate);

// let myDate = new Date (2024, 9, 26, 12, 30, 20);
// console.log(myDate);


// let date = new Date().getDate(); //2
// let day = new Date().getDay(); // 4
// let Month = new Date().getMonth(); // 3
// let year = new Date().getFullYear(); //2026
// let dateStr = new Date().toDateString();
// let hours = new Date().getHours(); // 16
// let minutes = new Date().getMinutes(); // 26
// let seconds = new Date().getSeconds(); // 13
// let millisec = new Date().getMilliseconds(); //970
// let timeStr = new Date().toTimeString();


// console.log(
//     `
//     ${dateStr},
//     ${timeStr}`
// );


// console.log(
//    `
//     ${date}
//     ${day}
//     ${Month}
//     ${year}
//     ${hours}
//     ${minutes}
//     ${seconds}
//     ${millisec}`,
// );


// const days = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
// ];

// const months = [
//     "Январь ",
//     "Февраль ",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль ",
//     "Август",
//     "Сентябрь",
//     "Октябрь ",
//     "Ноябрь",
//     "Декабрь"
// ];

// let myDate = new Date();

// let fullDate = ` Сегодня: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} ${days[myDate.getDay()]}`;
// // 
// console.log(fullDate);




// const currentDate = new Date();

// const myFormattedDate = currentDate.toLocaleDateString("ru-Ru", {
//     weekday: "short",
// });


// console.log(myFormattedDate);


// const currentDate = new Date();

// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// };

// const myFormattedDate = currentDate.toLocaleDateString("en-EN", options);
// const myFormattedDate = currentDate.toLocaleDateString("ru-RU", options);
// const myFormattedDate = currentDate.toLocaleDateString("uz-UZ", options);


// console.log(myFormattedDate);



// const currentDate = new Date();






// const currentDate = new Date();

// const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

// const myFormattedTime = currentDate.toLocaleTimeString("uz-UZ", options);
// console.log(myFormattedTime);



// const myTime = new Date();

// let fullTime =  "сейчас: " +  myTime.getHours() +  " час " +  myTime.getMinutes() +  " мин " +  myTime.getSeconds() +  " сек ";

// console.log(fullTime);


// const now = new Date();

// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// let formattedTime = [
//     hours.toString().padStart(2, "0"),
//     minutes.toString().padStart(2, "0"),
//     seconds.toString().padStart(2, "0"),
// ].join(":")

// console.log(formattedTime);


