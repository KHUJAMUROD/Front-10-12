// function bark() {
// console.log(`${this.name} лает: Гав!`);
// }



// const dog1 = {
//     name:"Шарик",
//     breed: "корги",
//     bark: bark,
//    };

// const dog2 = {
//     name:"Бобик", 
//     breed: "шпиц",
//     bark:bark, 
// };

// dog1.bark()
// dog2.bark()


// function getArea() {
//     return this.width * this.heighty;
// }


// function getPerimeter() {
//     return this.width * 2 + this.height * 2;
// }

// const square1 = {
//     width: 4,
//     height: 5,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// };



// const square2 = {
//     width: 7,
//     height: 3,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// };

// console.log(square1.getArea());
// console.log(square1.getPerimeter());
// console.log(square2.getArea());
// console.log(square2.getPerimeter());


// let str = "My name is Alexei";
// console.log(str.toLocaleLowerCase());


// let str = "My name is Alexei";
// console.log(str.toUpperCase());


// let userName = 'Alexei'
// let str = `My name is ${userName}`;
// console.log(userName.indexOf('ei'));
// console.log(str.indexOf('ei'));


// let userName = 'Alexei'
// let str = `My name is ${userName}`;
// console.log(str.indexOf('t'));


// let userName = 'Alexei'
// let str = `My name is ${userName}`;
// console.log(str.toLocaleLowerCase().indexOf('al'));


// let userName = 'Alexei'
// let str = `My name is ${userName}`;
// console.log(str.includes('al'));

// let userName = 'Alexei'
// let str = `My name is ${userName}`; 
// console.log(str.toLocaleLowerCase().includes('al'));

// let userName = 'Alexei';

// let str = `My name  is alexey`;

// console.log(
//     `The string "${userName}" ${
//     str.includes(userName) ? 'is' : 'is not'
//   } in the sentence`
// );

// const products = [
//     'Яйцо столовое',
//     'молоко молочник',
//     'кровка молоко',
//     'виноград изабела'
// ];


// let search = 'молоко';
// products.forEach((products) => {
//     if (products.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
//         console.log(products);
//     }
// });



//  let userName = 'Alexei';
//  let str = `My name is ${userName}`;
//  console.log(str.slice(5, 7));

//  let userName = 'Alexei';
//  let str = `My name is ${userName}`;
//  console.log(str.slice(5));

//  let userName = 'Alexei';
//  let str = `My name is ${userName}`;
//  console.log(str.slice(2, 9));


// let dateStr = "2023-10-05";
// let year = dateStr.slice(0, 4);
// let month = dateStr.slice(5, 7);
// let  day = dateStr.slice(8, 10);
// console.log(year, month, day);

//  let str = "hello, world!";
//  let newStr = str.slice(0, -2);
//  console.log(newStr);


// let userName = 'Alexei';
// let str = `My name is ${userName}`;
// console.log(str.split(' '));


// let userName = 'Alexei';
// let str = `My name is ${userName}`;
// console.log(str.split(' ').join('|'));

// let userName = 'Alexei';
// let str = `                                                        My name is ${userName}`;
// console.log(str.trim());


// let email1 = "toto@gmail.com"
// let email2 = "               toto@gmail.com"
// console.log(email1 === email2);

// let email1 = "toto@gmail.com"
// let email2 = "               toto@gmail.com"
// console.log(email1.trim() === email2.trim());



// const products = [
//     'Яйцо столовое',
//     'молоко молочник',
//     'кровка молоко',
//     'виноград изабела'
// ];

// let search = 'молоко';
// products.forEach((product) => {
//     if (product.toLowerCase().startsWith(search.toLowerCase())) {
//         console.log(product);
//     }
// });


//  const products = [
//     'Яйцо столовое',
//     'молоко молочник',
//     'кровка молоко',
//     'виноград изабела'
// ];

// let search = 'молоко';
// products.forEach((product) => {
//     if (product.toLowerCase().endsWith(search.toLowerCase())) {
//         console.log(product);
//     }
// });



// function palindrom(word) {
//     return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
// }
// console.log(palindrom('тот'));


// function palindrom(word) {
//     return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
// }
// console.log(palindrom('заказ'));





// const array = [1, 2, 3];
// const notArray = "not  an array";
// console.log(Array.isArray(array));
// console.log(Array.isArray(notArray));




// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// const newArray = array1 + array2;
// console.log(newArray);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const newArray = array1.concat(array2, array3);
// console.log(newArray);


// const array1 = [1, 2, 3];
// const value1 = 4;
// const value2 = 5;
// const newArray = array1.concat(value1, value2);
// console.log(newArray);


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const value1 = 7;
// const value2 = 8;
// const newArray = array1.concat(array2, value1, value2);
// console.log(newArray);


// const array1 = [1, 2, 3];
// const array2 = [4, [5, 6]];
// const newArray = array1.concat(array2);
// console.log(newArray);



// const array1 = [1, 2, 3, 4, 3, 5,];
// const index = array1.indexOf(3);
// console.log(index);



// const array1 = [1, 2, 3, 4, 3, 5,];
// const index = array1.indexOf(6);
// console.log(index);


// const array1 = [1, 2, 3, 4, 3, 5,];
// const index = array1.indexOf(3, 3);
// console.log(index);


// const array1 = [1, 2, 3, 4, 3, 5];
// const index = array1.lastIndexOf(3);
// console.log(index);

// const array1 = [1, 2, 3, 4, 3, 5];
// const index = array1.lastIndexOf(3, 3);
// console.log(index);


// const array1 = [1, 2, 3, 4, 3, 5];
// const lastElement = array1.pop();
// const lastElement = array1.push(7);
// console.log(lastElement);
// console.log(array1);


// const array = [10, 20, 30, 40, 30, 50];
// const lastElement = array.pop();
// if (lastElement > 30) {
//     console.log("последний элемент больше 30");
// } else {
//     console.log("последний элемент меньше или равен 30");
// }

// console.log(array);

// const array = [10, 20, 30, 40, 30, 50];
// while (array.length > 0) {
//     console.log(array.pop());
// }
// console.log(array);




// const array = [1, 2, 3];
// const newLength = array.push(4);
// console.log(newLength);
// console.log(array);


// const array = [1, 2, 3];
// const newLength = array.push(4, 5, 6);
// console.log(newLength);
// console.log(array);


// const array = [];
// for (let i = 1; i <= 10; i++){
//     array.push(i);
// }
// console.log(array);


// const array = [1, 2, 3, 4];
// while (array.length > 0) {
//     console.log(array.shift());
// }
// console.log(array);



// const array = [2, 3, 4];
// const newLength = array.unshift(1);
// console.log(newLength);
// console.log(array);


// const array = [3, 4, 5];
// const newLength = array.unshift(1, 2);
// console.log(newLength);
// console.log(array);

// const array = [];

// for (let i = 5; i >= 1; i--) {
//     array.unshift(i);
// }
// console.log(array);










// const array = [1, 2, 3, 4, 5, 6];

// const hasElement = array.includes(3, 2);
// console.log(hasElement);


// const array = [1, 2, 3, 4, 5, 6];

// const hasElement = array.includes(3, 3);
// console.log(hasElement);


// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.slice(2, 5);
// console.log(newArray);
// console.log(array);


// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.slice(1, 4);
// console.log(newArray);
// console.log(array);


// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.slice(-3, -1);
// console.log(newArray);
// console.log(array);



// const array = [1, 2, 3, 4, 5, 6,];
// const removedElements = array.splice(0, 2, 7, 7);
// console.log(removedElements);
// console.log(array);


// const array = [1, 2, 3, 4, 5];
// const removedElements = array.splice(2, 0, 6, 7);
// console.log(removedElements);
// console.log(array);


// const array = [1, 2, 3, 4, 5];
// const removedElements = array.splice(2, 2, 6, 7);
// console.log(removedElements);
// console.log(array);


// const array = [1, 2, 3, 4, 5];
// const removedElements = array.splice(2);
// console.log(removedElements);
// console.log(array);




// const array = ["apple", "banana", "cherry"];
// const result = array.join("_")
// console.log(result);
// console.log(array);


// const array = ["apple", "banana", "cherry"];
// array.reverse()
// console.log(array);


// const originalArray = [1, 2, 3, 4, 5];
// const reverseArray = originalArray.slice().reverse();

// console.log(originalArray);
// console.log(reverseArray);



const originalArray = [1, 2, 3, 4, 5];
const reverseArray = originalArray.reverse();

console.log(originalArray);
console.log(reverseArray);

// мутируют массив:
// push, pop,
// shift, unshift, 
// reverse, splice




// const students = [
//     ["сергей лобанов", 3, 521301],
//     ["сергей лобанов", 4, 521401],
//     ["сергей лобанов", 2, 521201],
//     ["сергей лобанов", 1, 521101],
// ];
// console.log(students[1][2]);




const students = [
    ["сергей лобанов", 3, 521301],
    ["сергей лобанов", 4, 521401],
    ["сергей лобанов", 2, 521201],
    ["сергей лобанов", 1, 521101],
];

for (const item of students) {
    for (const element of item) {
        let index = item.indexOf(element);
        if (index === 0) {
            console.log(`студент: ${element}`);
        } else if (index === 1) {
            console.log(`\t Курс: ${element}`);
        }else {
            console.log(`\t гуппа: ${element}`);
        }

    }
}







// const students = [
//     ["сергей лобанов", 3, 521301],
//     ["сергей лобанов", 4, 521401],
//     ["сергей лобанов", 2, 521201],
//     ["сергей лобанов", 1, 521101],
// ];

// for ( let index = 0; index < students.length; index++) {
//     let item = students[index];
//     for (let j = 0; j < item.length; j++) {
//         if ( j === 0) {
//             console.log(`студент: ${item[j]}`);
//         }else if (index === 1) {
//             console.log(`\t курс: ${item[j]}`);
//         }else {
//             console.log(`\t группа: ${item[j]}`);
            
//         }
//     }
// }