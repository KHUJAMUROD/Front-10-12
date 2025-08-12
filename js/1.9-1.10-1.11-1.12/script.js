// let age = 10;
// alert(age <= 12 ? "доступ запрещен" : "можете скачать приложения");

// let age = +prompt("сколько вам лет", 18);
// let message;
// if (age < 12){
//     message = "здраствуй малыш!";
// }else if (age < 18) {
//     message = "привет друг";
// }else if (age < 150){
//     message = "здраствуйте!";
// }else  {
//     message = "нынче столько не живут";
// }

// alert(message);

// let age = +prompt("сколько вам лет", 18);
// let message;
// age < 12 ? message = 'здраствуй малыш!' :
// age < 18 ? message = 'привет друг' :
// age < 150 ? message = 'здраствуйте!' : 'нынче столько не живут'
// alert(message)

// let age = 20;
// let message =
// age >=18
// ? age >=60
// ? "ВЫ ПЕНСИОНЕР"
// : "ДОСТУП РАЗРЕШЕН"
// : "ДОСТУП ОГРАНИЧЕН"
// console.log(message);

// let age = 20;
// let = message;
// let = category;
// if (age >= 18){
//     if (age >= 60){
//         message = 'вы пенсионер';
//         category = pensioner;
//     }else {
//         message = 'доступ разрешен';
//         category = adult;
//     }
// }else {
//     message = 'доступ огранечен';
//     category = child;
// }
// console.log(message);

// <------ 1,10 урок ------>
//  let capital = prompt ("введите столицу Турции");

//  switch (capital) {
//     case "стамбул":
//         alert("крупый город но не столица");
//         break;
//     case "Анталия":
//         alert("это туристическое центр но не столица");
//         break;
//     case "анкара":
//         alert("верно");
//         break;
//         default:
//             alert("ну это вряд ли")
//  }

// console.log(2 == "2");
// console.log(2 === "2");


//  <------ 1,11 урок ------>


// let i = 0;
// while (i < 5) {
//     console.log("значения i:" + i);
//     i++
// }

// let i = 0;
// while (i < 5) {
//     i++
//     console.log("значения i:" + i);
// }

// let i = 0;
// while (i <= 5) {
//     console.log("значения i:" + i);
//     i--;

// }

// let i = 5;
// while (i > 5) {
//     console.log("значения i:" + i);
//     i--;
// }
//               0               1           2            3              4             5
// let data = [" Понидельник ", " Вторник ", " среда ",  " Четверг ",  " пятница ", " Субота "]
// let index = 0

// // console.log('sometext'.length);
// // console.log('sometext'[2]);
// // console.log(data.length);

// //      0           6
// while (index < data.length){
//     console.log("элемент:" = data[index]);
//     index++;
// }

// let i = 5;

// do {
//     console.log("значения i:" + i);
//     i++
// } while (i < 5);
//  <------ 1,12 урок ------>

// let i = 0;

// while (i < 5) {
//     if (i === 3) {
//         // break;
//         i++
//         continue;
//     }
//     console.log(i);
//     i++
// }



// let numbers = [5, 8, 11, 15, 20, 9, 7];
// let numbers = [5, 8, 9, 7];
// let i = 0;
// let found = false;

// while (i < numbers.length){
//     if (numbers[i] > 10 ) {
//         console.log ("найден число больше 10: " + numbers[i]);
//         found = true;
//         break;
//     }
//     i++;
// }
// 

// let found;
// console.log(null == 0);

// if(!found) {
//     console.log("ничего не найдено")
// }

// let userInput;
// let iteration = 0;
// let tries = 5;

// while (true) {
//     iteration++;
//     userInput = prompt('отгадай загадку: "зимой лето - одним цветом"'
//     ).toLocaleLowerCase();

//     if(userInput === "елка"|| userInput === "ёлка"|| userInput === "ель") {
//         alert("верно!");
//         break
//     }else if (iteration >= tries) {
//         alert("попытки закончились ((")
//     }else {
//         alert ("осталось попыток:" + (tries - iteration));
//     }
// }

// alert("завершено");