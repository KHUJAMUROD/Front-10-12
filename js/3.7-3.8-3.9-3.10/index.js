// function someFn() {
//     return someFn();
// }

// someFn(); 

// function factorial(n) {
//     return n * factorial(n - 1);
// }
// console.log(factorial(4));


function factorial(n) {

    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(4));

// 4 - 1 = 3
// 3 - 1 = 2
// 2 - 1 = 1

// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24



// let result = 1;
// for (let index = 2; index <= 5; index++ ) {
//     result = result * index;
// }
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


//  let multiplier;

//  multiplier = 2;

//  let result = function (number) {
//     return number * multiplier;
//  };

//  console.log(result(5));

//  multiplier = 3;
//  console.log(result(5));



//  let multiplier;

//  multiplier = 2;
//  {
//     let result = function (number) {
//        return number * multiplier;
//     };

//     console.log(result(5));
    
//     multiplier = 3;
//     console.log(result(5));
// }


// function createMultiplier(multiplier) {
//     console.log(multiplier);
//     return function (number) {
//         console.log(multiplier);
//         return number * multiplier;
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
//         age: 20,
//         getName() {
//             return name;
//         },
//         getAge() {
//             return age;
//         },
//         celebrateBirthday() {
//             age++;
//         },
//     };
// }

// const person = createPerson("Alice");



// console.log(person.getName());
// console.log(person.getAge());
// person.celebrateBirthday();
// console.log(person.getAge());
// console.log(person.age);














// let currentDate = new Date();
// console.log(currentDate);


// let myDate = new Date(1754543482)
// console.log(myDate);

// let myDate = new Date(1754543878272)
// console.log(myDate);



// let myDate = +new Date();
// let myDate = new Date(1753680914685);
// console.log(myDate);

// let tenDaysAgo = 10 * 24 * 60 * 60 * 1000;

// let searchDate = myDate - tenDaysAgo;

// console.log(searchDate);



// let myDate = new Date("26 october 2025");
// let myDate = new Date ("10/26/2025");
// console.log(myDate);

// let myDate = new Date (2024, 9, 26, 12, 30, 20, 10);
// console.log(myDate);

// let myDate = new Date (2025, 9, 45);
// console.log(myDate);

// let date = new Date().getDate();
// let day = new Date().getDay();
// let Month = new Date().getMonth();
// let year = new Date().getFullYear();
// let dateStr = new Date().toDateString();
// let hours = new Date().getHours();
// let minutes = new Date().getMinutes();
// let seconds = new Date().getSeconds();
// let millisec = new Date().getMilliseconds();
// let timeStr = new Date().toTimeString();


console.log(
    // date,
    // day,
    // Month,
    // year,
    // dateStr,
    // hours,
    // minutes,
    // seconds,
    // millisec,
    // timeStr
);


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

// let fullDate = `Сегодня: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} ${days[myDate.getDay()]}`;

// console.log(fullDate);




// const currentDate = new Date();

// const myFormattedDate = currentDate.toLocaleDateString("ru-RU", {
//     weekday: "long",
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


// console.log(myFormattedDate);



// const currentDate = new Date();

// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// };

// const myFormattedDate = currentDate.toLocaleDateString("en-EN", options);


// console.log(myFormattedDate);


// const currentDate = new Date();

// const myFormattedTime = currentDate.toLocaleTimeString("uz-UZ");
// console.log(myFormattedTime);


// const currentDate = new Date();

// const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

// const myFormattedTime = currentDate.toLocaleTimeString("uz-UZ", options);
// console.log(myFormattedTime);



// const myTime = new Date();

// let fullTime = 
//     "сейчас: " +
//     myTime.getHours() +
//     " час " + 
//     myTime.getMinutes() +
//     " мин " +
//     myTime.getSeconds() +
//     " сек ";

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


