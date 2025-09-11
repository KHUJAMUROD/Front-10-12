// const str = "Hello, world!";

// const index = str.search("world");

// console.log(index);


// const str = "Коты, в отличее от собак, более своенравны";

// const index = str.search("/коты/");

// console.log(index); 


// const str = "Коты, в отличее от собак, более своенравны";

// const index = str.search(/коты/i);

// console.log(index); 


const str = "Hello, world!";

// const index1 = str.indexOf("world");
// const index2 = str.search("world");
// const index3 = str.search(/w[a-z]+d/);
// const index4 = str.indexOf(/w[a-z]+d/);
// console.log(index1);
// console.log(index2);
// console.log(index3);
// console.log(index4);


// const fruits = ["banana", "cherry", "lemon", "orange", "pear"];

// const numbers = [3, 4, 12, 6, 8];

// const addedFruits = ["apple", ...fruits, "plum",];

// const addedNumbers = [5, ...numbers, 7, 88];

// console.log(addedFruits);
// console.log(addedNumbers);


// const numbers = [3, 4, 12, 6, 8];

// let max = Math.max(3, 4, 12, 6, 8);
// let max = Math.max(...numbers);
// let min = Math.min(3, 4, 12, 6, 8);
// let min = Math.min(...numbers);

// console.log(max);
// console.log(min);


// const person = {
//     id: 1, 
//     name: "bob",
//     surname: "vatsone",
//     age: 29,
//     skills: ["HTML", "CSS", "JS", "PHP"],
// };

// const person2 = {...person};

// person2.id = 2;

// console.log(person);
// console.log(person2);












// const person = {
//     id: 1, 
//     name: "bob",
//     surname: "vatsone",
//     age: 29,
//     skills: ["HTML", "CSS", "JS", "PHP"],
// };

// const person2 = {...person};

// person2.id = 2;

// console.table(person);
// console.table(person2 );


// const numbers = [2, 4, 7, 9, 12];

// function print(a, b, ...args) {

//     console.log(a, b,);
//     console.log(args);
// }

// print(...numbers)


// const numbers = [2, 4, 7, 9, 12];

// function print(a, b, c, ...args) {
//     let result = a + b + c;
//     console.log(result);
//     console.log(args);
// }

// print(...numbers)
   

// const numbers = [2, 4, 7, 9, 12];

// function print(a, b, c, ...args) {
//     let result = a + b + c;
//     console.log(result);
// }

// let LastThree = numbers.slice(-3)

// print(...LastThree);


// const button = {
//     width: 300,
//     text : "Купить",
// };

// const redButton = {
//     ...button,
//     color: "red ",

// };

// console.table(button)
// console.table(redButton)


// const users = [
//     {id: 4,
//         name: "Рустам",
//         age: 28,
//         city: "казань",
//         skills: ["HTML", "CSS", "JavaScript", "React", "PHP"],
//     },
//     {
//         name: "Елена",
//         age: 34,
//         city: "Краснодар",
//         skills: ["HTML", "CSS", "JavaScript", "React", "Vue"],
//     },
//     {
//         name: "Роман",
//         age: 22,
//         city: "Тбилиси",
//         skills: ["HTML", "CSS", "JavaScript", "PHP"],
//     },
//     {
//         name: "Анна",
//         age: 45,
//         city: "Минск",
//         skills: ["Python", "PHP"],
//     },
// ];

// const userWidthId = users.map((user, index) => ({
//     id: index + 1,
//     ...user,
// }));

// console.log(userWidthId);

``` ``  ``


// const users = [
//     {id: 1,
//         name: "Рустам",
//         age: 28,
//         city: "казань",
//         skills: ["HTML", "CSS", "JavaScript", "React", "PHP"],
//     },
//     {
//         name: "Елена",
//         age: 34,
//         city: "Краснодар",
//         skills: ["HTML", "CSS", "JavaScript", "React", "Vue"],
//     },
//     {
//         name: "Роман",
//         age: 22,
//         city: "Тбилиси",
//         skills: ["HTML", "CSS", "JavaScript", "PHP"],
//     },
//     {
//         name: "Анна",
//         age: 45,
//         city: "Минск",
//         skills: ["Python", "PHP"],
//     },
// ];

// const userWidthId = users.map((user, index) => ({
//     ...user,
//     id: index + 1,
// }));

// console.log(userWidthId);


// const property1 = {
//     width:300, 
//     text: "купить",
// };

// const property2 = {
//     height: 150,
//     color: "red",
// };

// const commonProperty = {
//     ...property1,
//     ...property2,
// };

// console.table(commonProperty);


// const numbers = [1, 3, 5, 7, 9, 11];

// const fruits = ["banana", "cherry", "lemon", "orange", "pear"];

// let someNumber = numbers[3];

// let someFruits = fruits[2]

// console.log(someNumber, someFruits);



// const numbers = [1, 3, 5, 7, 9, 11];

// const fruits = ["banana", "cherry", "lemon", "orange", "pear"];

// const [firstNum, secondNum, thirdNum, fourthNum] = numbers;

// const [first, second, third, fourth] = fruits;

// console.log(firstNum, secondNum, thirdNum, fourthNum);

// console.log(first, second, third, fourth);



// const fruits = ["banana", "cherry", "lemon", "orange", "pear"];

// const [first, , third, , fifth] = fruits;

// console.log(first, third, fifth);
 


// const fruits = ["banana", "cherry", "lemon", "orange", "pear"];

// const [first, second, ...tail] = fruits; 

// console.log(first, second,  tail);



// const fruits = ["banana", , "lemon", "orange", "pear"];

// const [first, second = "grape", ...tail] = fruits; 

// console.log(first, second,  tail);


// const fruits = ["banana", ["cherry", "lemon"], "orange", "pear"];

// const [first, second, third, fourth] = fruits; 

// console.log(first, second,  third, fourth);



// const fruits = ["banana", ["cherry", "lemon"], "orange", "pear"];

// const [first, [second, third], fourth] = fruits; 

// console.log(first, second,  third, fourth);

 
 
// let a = 5;
// let b = 10;
// let c = a;

// a = b;

// b = c;

// console.log(a, b);



// let a = 5;
// let b = 10;

// [a, b] = [b, a]

// console.log(a, b);



// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };

// const { id, isMarried, age, fullName} = person;

// console.log(id, isMarried, age, fullName);


// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };

// const { id = 1, isMarried = false, age = null, ...otherProps} = person;

// console.log(id, isMarried, age, otherProps );


// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };

// const { params } = person;
//  console.log(params);
 

// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };

// const {params: { height, weight }} = person;

// console.log(height, weight);






// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };

// let weight = null;

// const {params: { height, weight: weightPerson}, 
// } = person;

// console.log(height, weightPerson);


// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//   hobbies: ["web", "jogging", "cycling"],
// };


// const { 
//     isMarried,
//     hobbies: [, , lastHobby],
// } = person;

// console.log(isMarried, lastHobby);



// const person = null;

// const {
//     age = 0,
//     params: { weight = "no data"  } ={},
//     hobbies: [firstHobby = "no data"] = [],
// } = person || {};

// console.log(age, weight, firstHobby);

