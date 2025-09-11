// <------ 1,5 урок ------>

// a > b
// a < b 
// a >= b 
// a <= b 
// a == b 
// a != b 
// a = b

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 = 1);
// console.log(2 != 1);

// let result = 5 > 4;
// console.log(result);
// console.log( 0 == false);
// console.log( "" == false);
// console.log( "" === false);
// console.log( 0 === false);
// console.log( "1" == 1);
// console.log( "1" === 1);
// console.log( "1" === 1);
// console.log( "1" !== 1);
// console.log("2" > 1);
// console.log("01" == 1);
// console.log(true == 1);

// <------ 1,6 урок ------>

// && И
// ||ИЛИ
// ||=логическое присваивание или
// &&=ЛОГИЧЕСКОЕ ПРИСВАИВАНИЕ И
// ! НЕ

// && И
// console.log(1 === 1 && 2 === 2);
// console.log(1 === 1 && 2 === 3);
// console.log(1 === 1 && 2 === 3 && "3" === 3);
// console.log(1 === 1 && 2 === 3 && 3 === 3);

// let a = null;
// let b = false;
// let c = 0;
// let d = "";
// let e = 1;
// console.log(a && e);
// console.log(b && e);
// console.log(c && e);
// console.log(d && e);
// console.log(0 && e);

// let a = 3;
// let b = 5;
// let c = 0;
// let d = "";
// let e = 1;
// console.log(a && b && e);

// let age = prompt("введети ваш возраст");
// alert (age && "спасибо за информацию");

// let isInfo = true;
// alert(isInfo && "это информация по вашему запросу");

// let isInfo = false;
// alert(isInfo && "это информация по вашему запросу");

// let isAdmin = prompt("если вы админ, введите любой текст");
// let isLogin = prompt("введите логин");
// let isPassword = prompt("введите пароль");
// let canAccessAdminPanel = isAdmin && isLogin && isPassword;
// alert(canAccessAdminPanel && "доступ разрешено");

// let hour = 10;
// if(hour >= 9 && hour < 18){
//     console.log("открыто");
// }else{
//     console.log("закрыто")
// }

// let hour = 8;
// if(hour >= 9 && hour < 18){
//     console.log("открыто");
// }else{
//     console.log("закрыто")
// }

// ||ИЛИ

// console.log(1 === 1 || 2 === 4 || 3 === "3");
// console.log(1 === 2 || 2 === 4 || 3 === "3");

// let a = 3;
// let b = 5;
// console.log(a || b);

// let a = 3;
// let b = 5;
// console.log(a && b);

// let a = 3;
// let b = null;
// console.log(a && b);

// let a = null;
// let b = 5;
// console.log(a || b);

// let a = false;
// let b = 5;
// console.log(a || b);

// let a = true;
// let b = 5;
// console.log( a || b);

// let a = 0;
// let b = 5;
// console.log( a || b);

// let a = '0';
// let b = 5;
// console.log( a || b);

// let temp = false;
// console.log(temp || 'температура 20 градусов');

// let age = prompt("введите ваш возраст");
// let isStudent = prompt("вы студент (да/нет)").toLocaleLowerCase() === "да";
// let hasDiscount = prompt("у вас есть скидка? (да/нет)").toLocaleLowerCase() === "да";
// let canGetDiscount = age < 18 || isStudent || hasDiscount;
// if(canGetDiscount){
//     alert("вы можете получить товар со скидкой")
// }else {
//     alert("желаете приобрести карту нашего магазина")
// }

// let answer = prompt("напишите весений месяц").toLocaleLowerCase();
// if(answer === "декабрь" || answer === "март" || answer === "июнь"){
//     alert("правильно");
// }else{
//     alert("не правильно")
// }

// ||=логическое присваивание или
// a ||= b
// a ||= (a = b)

// let temp = "";
// temp ||= "данных пока нет зайдите позже"
// console.log(temp)

// let temp = "25";
// if(!temp) {
//     temp = "данных пока нет зайдите позже"
// }
// console.log(temp);

// &&=ЛОГИЧЕСКОЕ ПРИСВАИВАНИЕ И
// a &&= b;
// a &&= b;

// let age = 27;
// console.log(age &&= ' пользователю ' + age + ' лет ')

// let age = 27;
// console.log(age && ' пользователю ' + age + ' лет ')

// let age = 27;
// console.log(age &&= ' пользование ' + age + ' лет ');
// console.log(age);

// let age = 27;
// if(age){
//     console.log(' пользование ' + age + ' лет ');
// }

// ! НЕ
// result != value;
// console.log(!true);
// console.log(!0);
// console.log(!"0");
// console.log(!!'какая-то строка');
// console.log(!!null);

// && > ||
// ! > && > ||
// console.log(1 === 1 || 2 === 3 && 4 === 4);

// let age = prompt("введите ваш возраст")
// if (age >= 16) {
//     alert("приходите в нашу автошколу")
// }

// if (age) {
//     alert(
//         `у вас нет возможности учится для получения водительское прав. Обратитесь ${16 - age} год(а)`
//     )
// }

// if (prompt("введите ваш возраст") >= 16){
//     alert("приходите в нашу автошколу");
// }else {
//     alert("нужна еще подрости")
// }

// let age = +prompt("введите ваш возраст")
// if (age >= 18) {
//     let hasLicense = prompt(
//         "есть ли  у вас прав (да / нет)"
//     ).toLowerCase();
//    if (hasLicense === "да") {
//         alert("вы можете водить машину")
//       } else {
//         alert("вы не можете водить машину,  так как у вас нет прав ")
//     }
//    } else {
//     alert("вы не можете водить машину, так как вам меньше 18 лет");
// }


// let hasLicense;
// let age = +prompt("введите ваш возраст")
// if (age >= 18) {
//      hasLicense = prompt(
//         "есть ли  у вас прав (да / нет)"
//     ).toLowerCase();
//     console.log("check1 " + hasLicense)
//     if (hasLicense === "да") {
//         alert("вы можете водить машину")
//         console.log("check2 " + hasLicense)
//     } else {
//         alert("вы не можете водить машину,  так как у вас нет прав ");
//         console.log("check3 " + hasLicense)
//     }
// } else {
//     alert("вы не можете водить машину, так как вам меньше 18 лет");
// }
// console.log('check 4', hasLicense);

// let age = +prompt("введите ва возраст")
// if (isNaN(age)) {
//     alert("вы вели не числою пожалуйста, введите числовое значения.");
// } else if(age >= 16) {
//     alert("доступ разрешен")
// }else{
//     alert("доступ ограничен")
// }

// let age;

// while(true) {
//      age =+prompt('введите ваш возраст');
//     if(isNaN(age)) {
//         alert('вы ввели не числовое, пожалуйста введите числовое значения')
//     } else {
//         break;
//     }
// }
// if (age >= 16) {
//     alert('доступ разрешен')
// }else {
//     alert('доступ ограничен')
// }

// function question(){
//     let age = +prompt("введите ваш возраст");

//     if(isNaN(age)) {
//         alert("вы ввули не числою пожалуйста введите корректный возраст");
//         question();
//     }else {
//         message(age);
//     }
// }

// question();

// function message(age){
//     if (age >= 16){
//         alert("доступ разрешен");
//     }else {
//         alert("доступ ограничен");
//     }
// }