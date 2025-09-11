

// const ism = prompt("Ismingiz nima?");
// const yosh = prompt("Yoshingiz nechida?");
// const yosh = +prompt("Yoshingiz nechida?");
// const yosh = Number(prompt("Yoshingiz nechida?"));

// // const result = `Qadirli ${ism}`;
// // const result = `Qadirli ${ism}. Siz $(2022 - yosh) tug'ilhansiz.`;
// const result = `Qadirli ${ism}. Siz $(2022 - yosh) tug'ilhansiz. va siz ${yosh * 12} oy, ${((yosh * 365) / 7).toFixed(0)} hafta, ${yosh * 365} kun, ${yosh * 365 * 24} soat, ${yosh * 365 * 24 * 60} daqiqa, ${yosh * 365 * 24 * 60 * 60} soniya yashagansiz.😊`;

// alert(result);


// ism = prompt("Ismingiz nima?");

// // includes

// const ismlar = ['ahror', 'sardor', 'shoxrux']; 

// if (ismlar.includes(ism)) {
//     alert(`ha${ism} bor`);
// } else{
//     alert(`Afsuski ${ism} yo'q`);
// }


// const ismlar = [ 'ahror', 'sardor', 'shoxrux']

// for

// for (let i = 0; i <ismlar.length; i++){
//     // console.log(i);

//     let result = ismlar[i] + 'bek';
//     console.log(result);
// }


// while
// const ismlar = [ 'ahror', 'sardor', 'shoxrux']
// let i = 0;

// while (i < ismlar.length) {
//     let result = ismlar[i] + 'bek';
//     console.log(result)
//     i++
// }


// const viloyatNomi = prompt('Qaysi viloyat nomi');


// switch (viloyatNomi) {
//     case 'toshkent':
//         alert('poytaxt');
//         break;
//     case 'samarqand':
//         alert('Qadimiy shahar');
//         break;
//     case 'namangan':
//         alert("Zo'rrrrr zanet dadesh");
//         break;
//         default: (`Bunday ${viloyanNomi} viloyat yoq`);
// }



// const belgilar = prompt('nima')

// let meyor = 20;


// TDZ temporary dead zone
// const va var ni biz e'lon qilishdan ishlata olmaymiz

// console.log(age);

// let age = 24;
// var age = 24;


// function declaration


// function sayHello(){
//     console.log('hello function decloration');
// }

// sayHello()



// function sayHello(){
//     console.log('hello function decloration');
// }


// function expression


// function saybyebye(){
//     console.log('sayByeBYe expression');
// }


// saybyebye()

// const saybyebye = function (){
// console.log('sayByeBYe expression');
// }

// saybyebye()
// arrow function


// const nice = () => {
//     console.log("this is arrow function");
// }

// nice()
// nice()
// nice()
// nice()



// argument & parameters


// const sayHello = function (name, day='kechasi') {
//     console.log(`hayrli ${day} ${name}`);
// }

// // console.log(name );

// let  name = 'ahror'

// sayHello('ahror')

// sayHello('shoxrux', 'tong')


// const calcArea = function(w, h){
//     const area = w * h;
//     console.log(area);
//     return area
// }

// calcArea(5, 3)

// const area = calcArea(5)

// console.log(area)



// const calcArea = function (radius) {
//   return 3.14 * radius ** 2
// }

// const a = calcArea(5)



// const greet =  (ism, familya) => `hello ${ism} ${familya} `

// const result = greet('Danil', 'Sultanov')

// console.log(result);



// const bill = function (products, tax){
//     let total = 0;

//     for (let i = 0; i < products.length; i++) {
//         total +=  products[i] + products[i] * tax;
//     }

//     return total
// }

// const result = bill([10,13,45,], 0.2)

// const bill = (products, tax) => {
//     let total = 0;

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }

//     return total
// }

// // console.log(12 );
// // console.log(13 * 0.2 + 13);
// // console.log(45 * 0.2 + 45);
// // console.log(54 + 15.6 + 12);


// const result = bill([10, 13, 45,], 0.2)

// console.log(result)