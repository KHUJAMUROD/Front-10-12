// const someObject = {
//     key: value,
//     key1: value2,
// };

// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// console.log(student.skills[2]);

// console.log(student.address.city);
// console.log(student.address.street);



// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };
//     delete student.isMarried;
// console.log(student);


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };
// student.foreignLanguage = "English"
// console.log(student);


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };
// const additionalData = "foreignLangusage"

// student[additionalData] = "English"

// console.log(student);


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// student.address.country = "RUSSIA"

// console.log(student);


// let x = 1;
// let y = x;
// y = 2;
// console.log(x);



// const Fedya = {
//     age: 32,
//     height: 176,
//     weight:78,
//     isMarried: false,
// };

// const Kolya = Fedya;

// Kolya.isMarried = true;

// console.log(Fedya);  


// const array1 = [1, 2, 3];
// const array2 = array1;
// array2[3] = 4;
// console.log(array1);


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter": null,
//         apartment: 12,
//     },
// };

// function renderStudentInfo() {
//     const renderStudentInfoDiv = document.getElementById("student-info");

//     renderStudentInfoDiv.innerHTML = `
// <h2>${student.name} ${student.surname}</h2>
// <p>Курс: ${student.course}</p>
// <p>возраст: ${student.age}</p>
// <p>Женат / Замужем: ${student.isMarried ? "Да" : "Нет "}</p>
// <p>Навыки: ${student.skills}</p>
// <h3>Адрес</h3>
// <p>город: ${student.address.city}</p>
// <p>Улица: ${student.address.street}</p>
// <p>Дом: ${student.address.house}</p>

// <p>Корпус/Литера: ${student.address["building / letter"] === null
//             ? "Не указано"
//             : student.address["building / letter"]
//         }</p>

// <p>Квартира: ${student.address.apartment}</p>
// `

// }


// renderStudentInfo(student);


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// console.log("city" in student.address);

// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// console.log("HTML   in" student.skills);\



// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// console.log(student.skills.includes('HTML'));


// const student = {
//     name: "Александр",
//     surname: "Иванов",
//     course: 3,
//     age: 21,
//     isMarried: false,
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         city: "Краснодар",
//         street: "красная",
//         house: 22,
//         "building/letter":null,
//         apartment: 12,
//     },
// };

// console.log(student.skills.includes('PHP'));






// for (let key in  Object ){


// }


const capitalofCountries = {
    Рим: "Италии",
    Париж: "Франция",
    Анкара: "Турция",
    Берлин: "Германия",
};

// for (let capital in capitalofCountries ){
//     console.log(`${capital}, является столицей ${capitalofCountries[capital]}`);
// }


// const months = ["январь", "Февраль", "Март", "Апрель", "Май", "Июнь"];

// for ( let month of months) {
//     console.log(month);
// }  
// for ( let capital of capitalofCountries) {
//     console.log(capital);
// }  


// function printMonth() {

//     const months = ["январь", "Февраль", "Март", "Апрель", "Май", "Июнь"];

//     for (let month of months) {
//         if (month === 'Март') {
//             console.log("пропускаем март");
//             continue;
//         }

//         if (month === 'Май') {
//             console.log("достигли май прерываем цикл");
//             console.log("цикл завершен");
//             return;
//         }

//         console.log(month);

//     }
// }
// printMonth();








// const arrNums = [3, 5, 7, 77, 55];

// console.log(arrNums[0]);
// console.log(arrNums[1]);
// console.log(arrNums[2]);
// console.log(arrNums[3]);
// console.log(arrNums[4]);



// const arrNums = [3, 5, 7, 77, 55];

// for (let i =0; i < arrNums.length; i++) {
//     console.log(arrNums[i]);

// }

// const arrNums = [3, 5, 7, 77, 55];

// arrNums.forEach((el) => {
//     console.log(el);
// })


// const arrNums = [3, 5, 7, 77, 55];

// arrNums.forEach((el, index, arr) => {
//   console.log(`${el}: ${index} ${arr}`);
// });



// const arrNums = [3, 5, 7, 77, 55];

// arrNums.forEach((el, index, arr) => {
//   console.log(`${el}: ${index}, массив ${arr}`);
// });


// const arrNums = [3, 5, 7, 77, 55];

// arrNums.forEach(( elem, index, arr) => {
//  arr[index] = elem * 2
// });
// console.log(arrNums);




// const user = {
//     name: 'Alexander',
//     greeting: function () {
//     console.log("Hello!");
//     },
// };
// user.greeting();



// const dog = {
//     name: "Шарик",
//     breed: "корги",
//     bark() {
//         console.log(`${dog.name} лает: "Гав"`);
//     }
// };

// const cat = {
//     name: "gray",
//     breed: "Британец",
// }

// dog.bark();


// const user = {
//     name: "Maykol",
//     age: 35,
//     city: "London",

//     getInfo() {
//          return `пользователь ${user.name}, в возрасте ${user.age}, проживает в г. ${user.city}`;
//     },
// };

// console.log(user.getInfo());














