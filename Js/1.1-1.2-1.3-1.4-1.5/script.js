// <------ 1,1 урок ------>
// let a = 123456;
// let b = 12.44;
// let c = 0.999;
// let d = 2_555_777;
// var info1 = "someinfo1"
// let info2 = 123
// const info3 = true

// console.log(info1, info2, info3);
// console.log(info1);
// console.log(info2);
// console.log(info3);
// console.log(typeof(info1), info1);
// console.log(typeof(info2), info2);
// console.log(typeof(info3), info3);



// let str = 'som\'et"ex`t'
// console.log(str);
// let str2 = "som'et\"ext"
// console.log(str2);
// let str3 = `some\`te"'xt`
// console.log(str3);
// let str4 = 'some\tte\nxt'
// console.log(str4);



// let someInfo = 123
// console.log(someInfo); // 123
// console.log(typeof (someInfo)); // 'number'
// console.log(typeof (typeof (someInfo))); // 'string'



// let a = 123
// console.log(a + "hello") //123hello
// console.log(typeof (a + "hello")) //123string
// console.log('text' - 1123)  //NaN
// console.log('JS' * 10);  //NaN
// console.log('JS' / 10);  //NaN
// console.log(typeof (NaN)) // number 
// console.log(1 / 0 ) //Infinity
// console.log(1 / -0 ) //-Infinity
// console.log(1123 * 0 )  // 0


// console.log(2 ** 53); // 9007199254740992
// console.log(9007199254740992n); // 9007199254740992n
// let a = 9007199254740992n;
// console.log(a)
// console.log(typeof a)



// console.log(2 ** 5) // 2 * 2 * 2 * 2 * 2;  // 32
// console.log(Math.pow(2, 3));  // 8



// let camelCase = 'camelelCase'
// let PascalCase = "PascalCase"
// let snake_case = `snake_case`




// const arr = []
// const Muhammad = {
//     'name': 'Muhammad',
//     lastName: 'Aliyev',
//     age: 15,
//     1 : 'scholl 50'
// }


// let Adress = 'adressKey'
// Muhammad[Adress] = 'Sarteppo'
// console.log(Muhammad[Adress]);
// console.log(Muhammad);


// console.log(Muhammad.name); //  Muhammad
// console.log(Muhammad['1']); //   'scholl 50'
// console.log(Muhammad['lastName']); //Aliyev
// console.log(Muhammad[age]); //error
// console.log(Muhammad['age']); // 15
// console.log(Muhammad[city]); // error
// console.log(Muhammad.'name'); //error
// Muhammad.birthday = 1999
// console.log(Muhammad.birthday ); // undefined


// Muhammad.city = 'Samarkand'
// console.log(Muhammad['city']); // Samarkand
// console.log(Muhammad.city); // Samarkand





// //         0        1         2    3
// let arr = ['name', 'surname', 'age', 123]
// console.log(arr[0]); // name 
// console.log(arr[1]); // surname
// console.log(typeof (arr[1])); // string
// console.log(typeof (arr[3])); // number





// negatives =>   NaN, undefined, null, 0, '', false



// console.log(Boolean(0)); // false
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(!!(0));
// console.log(!!(''));
// console.log(!!(NaN));
// console.log(Boolean(1));
// console.log(Boolean('text'));
// console.log(Boolean(-1));
// console.log(!!(2));
// console.log(!!('some'));
// console.log(!!(-4 - 2));
// console.log(4 - -2); //6
// console.log(-4 - 2); // -6


// let a = true;
// console.log(a);
// console.log(typeof a);


// let a = 5 > 2;
// console.log(a); // true

// let a = null;
// console.log(typeof a)

// "use strict"
// let Kuma = 16
// Kuma = 16

// console.log(Kuma);

// let a = undefined;
// console.log(a)

// let sym = Symbol("someinfo");
// let sym2 = Symbol("someinfo");
// console.log(sym === sym2); //false

// let sym = ("someinfo");
// let sym2 = ("someinfo");
// console.log(sym === sym2); //true

// const person = { lastname: 'khujnov', age: 27 };
// console.log(typeof person);

// const person2 = ["khujnov", 27]; 
// console.log(typeof person2);

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false


// function sum(a, b) {
// return a + b
// return console.log(a + b);
// }

// sum(2, 5)
// sum('amir', ' kazimdjanov')

// console.log(sum(10, 20));

// sum(10, 20)


// console.log(typeof sum);
// const error = new Error("Ошибочка вышла-с");
// const error = new Error("asdcasdv");
// console.log(typeof error, error);
// console.error(typeof error, error);
// let age = 25
// console.log(typeof(age) === 'string');
// console.log(typeof(age) === 'number');
// console.log(typeof error === "object");


// <------ 1,2 урок ------>


// function example() {
//     console.log(a);
// }

// example();

// let a = 1;

// negatives => 0, false, '', NaN, undefined, null


// if (false) {
//     console.log('positive');
// } else {
//     console.log('negative');
// }

// if (false) {
//     console.log('positive');
// } else if(true) {
//     console.log('positive 2');
// } else {
//     console.log('negative');
// }


// 10 > 5 ? console.log('positive') : console.log('negative');

// 10 < 5 ? console.log('positive') :
// 10 > 5 ? console.log('positive 2') : console.log('negative') ;


// function example() {
//     var localVar = 20;
//     console.log(localVar);
//     return localVar
// }

// example();
// console.log(example());
// console.log(localVar);



// let localLet = 10


// {
//     console.log(localLet);
//     localLet = 20
// }

// console.log(localLet);


// let x = 1;

// function example() {
//     if (x) {
//         let  y = 10;
//         console.log(y);
//     }
// }

// example();
// console.log(y);


// let x = 1;
// let y = 20

// function example() {
// if (x) {
// y = 10;
// let y = 10;
// console.log(y);
// }
// }

// example();
// let y = 20
// console.log(y);

// const a = 1;
// a = 2;
// console.log(a);

// var a = 1;
// var a = 2;
// console.log(a);

// let a = 1;
// a = 2;
// console.log(a);

// let x = 1;
// function example() {
//     if (x) {
//         var y = 10;
//     }
//     console.log(y);
// }
// example();
// console.log(y);


// <------ 1,3 урок ------>

// +, -, *, /, **, % ;

// let num = 1 + 3;
// console.log(num);

// let num = 1 - 3;
// console.log(num);

// let num = 5 * 5;
// console.log(num);

// let num = 25 / 5;
// console.log(num);

// let num = 2 ** 5;  // 2 * 2 * 2 * 2 * 2
// console.log(num);

// let num = 7 % 3; // 1
// let num = 70 % 30; // 10
// let num = 70 % 200; // 70
// console.log(num);

// let num = '6';
// let num = 'asv';
// num = +num;
// num = -num;
// console.log(num, typeof (num));


// +2, -2, +0, -0;

// let num = parseInt("42.1sdf"); // 42
// let numF = parseFloat("42.123"); // 42.123
// let num = parseInt("asdfasd42.5"); //NaN
// let numF = parseInt("asdfasd42.5"); //NaN
// let num = parseInt("123asdfasd42.5"); //123
// let numF = parseFloat("123asdfasd42.5"); //123
// console.log(num, typeof num)
// console.log(numF, typeof numF)


// let a = 3 + "2";
// console.log(typeof a, a); // string 32

// let a = 3 + 5 + "2"; //string 82
// let a = 3 + 5 + +"2"; // number 10 
// console.log(typeof a, a); 



// let a = "2";
// let b = "3";

// let c = a + b
// console.log(c) // 23 


// let a = "2";
// let b = "3";

// let c = +a + +b
// console.log(c) // 5


// console.log(6 + "2"); // 62
// console.log(6 / "2"); // 3 
// console.log(6 * "2"); // 12 
// console.log(parseInt("4px") - 2);  // 2
// console.log(2 + 3 * 4); // // 14


// Инкремент ++
// Декремент --
// let x = 1;
// console.log(x++)
// console.log(x)
// console.log(++x)



// let x = 3;
// x = 5;
// // x + 5
// // console.log(x);
// x += 5;
// console.log(x);


// let x = 20;
// x /= 5;
// console.log(x);


// let x = 2;
// x *= 3 + 5
// console.log(x);





// alert("будут использованы ваши персональные данные")
// let conf = confirm( "подтвердите согласие на использование персональных данных")

// console.log(conf);


// let message = confirm(
//     "подтвердите согласие на использование персональных данных"
// );


// if (message) {
//     window.location.href = "https://www.github.com";
// } else {
//     alert("не очень-то и надо");
// }

// let answer = prompt('tell us who you are?')
// console.log(answer, typeof(answer));

// let age = prompt("сколько лет вам", 22);
// let age = +prompt("сколько лет вам", 22);


// console.log(typeof(age), age);

// if (age === null || age === '') {
//     alert("ммм, - да...");
// } else {
//     let year = prompt("какой сейчас год?");
//     alert(`вы родились в ${year - age} году`);
// }

