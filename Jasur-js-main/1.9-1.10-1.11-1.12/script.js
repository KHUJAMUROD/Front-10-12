// let age = 14;
// alert(age <= 12 ? "доступ запрещен" : "можете скачать приложения");

// let age = +prompt("сколько вам лет", 18);
// let message;
// if (age <= 12 || age <= 17){
//     message = "здраствуй малыш!";
// }else if (age <= 18 || age <= 40) {
//     message = "привет друг";
// }else if (age <= 41 || age <= 80){
//     message = "здраствуйте!";
// }else  {
//     message = "нынче столько не живут";
// }

// alert(message);  

// let age = +prompt("сколько вам лет", 18);
// let message;
// age <= 12 || age <= 17 ? message = 'здраствуй малыш!' :
// age <= 18 || age <= 40 ? message = 'привет друг' :
// age <= 41 || age <= 80 ? message = 'здраствуйте!' : 'нынче столько не живут'
// alert(message)



// let age = 70;
// let  message;
// let category;
// if (age >= 18){
//     if (age >= 60){
//         message = 'вы пенсионер';
//         category = 'pensioner';
//     }else {
//         message = 'доступ разрешен';
//         category = '(adult)';
//     }
// }else {
//     message = 'доступ огранечен';
//     category = child;
// }
// console.log(message, category);

// <------ 1,10 урок ------>


// let capital = prompt("введите столицу Турции").trim().toLowerCase();
// //  === 
// switch (capital) {
//     case "стамбул":
//         alert("крупый город но не столица");
//         break;
//     case "анталия":
//         alert("это туристическое центр но не столица");
//         break;
//     case "анкара":
//         alert("верно");
//         break;
//     default:
//         alert("ну это вряд ли")
// }


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

// let i = 10;
// while (i <= 5) {
//     console.log("значения i:" + i);
//     i++;
// }


// let i = 5;
// while (i > 0) {
//     console.log("значения i:" + i);
//     i--;
// }

// let data = [" Понидельник ", " Вторник ", " среда ",  " Четверг ",  " пятница ", " Субота "]
// let index = 0

// while (index < data.length){
//     console.log("элемент:" + data[index]);
//     index++;
// }

// console.log(data[3]);

// let i = 10;

// do{
// console.log("значения i:" + i );
// i++
// }while (i < 5);
//  <------ 1,12 урок ------>

// let i = 0;

// while (i < 5){
//     if(i === 3) {
//         // break;
//         // i++
//         // continue;
//     }
//     console.log(i);
//     i++
// }
// console.log ('все')

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
//         break
//     }else {
//         alert ("осталось попыток:" + " " + (tries - iteration));
//     }
// }

// alert("завершено");