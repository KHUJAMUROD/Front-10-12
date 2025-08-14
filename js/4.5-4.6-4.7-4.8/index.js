// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(doubledNumbers);


// const numbers = [1, 2, 3, 4, 5];

// const double = (num) => num * 2;

// const doubledNumbers = numbers.map(double);

// console.log(doubledNumbers);



// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = [];

// const newArray = numbers.forEach((num) => {
//     doubledNumbers.push(num * 2);
// });

// console.log(doubledNumbers);
// console.log(newArray);



// const words = ["apple", "banana", "cherry", "date",];

// const wordLengths = words.map((word) => word.length);

// console.log(wordLengths);



// const people = [
//     { name: "Alice", age: 25},
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 20},
// ];

// const names = people.map((person) => person.name).join(", ");
// console.log(names);


// const tasks = [
//   { id: 1, description: 'КУПИТЬ ХЛЕБА', completed: false},
//   { id: 2, description: 'СДЕЛАТЬ УРОКИ', completed: true},
//   { id: 3, description: 'ПОЗВОНИТЬ МАМЕ', completed: false},
// ];

// const taskList = document.getElementById("task-list");

// const tasksItems = tasks.map((task) => 
//     `<li>${task.description}</li>`
// ).join("");

// taskList.innerHTML = tasksItems;


// const array = [1, 2, 3, 4]; 

// const initialValue = 10;
// const sumWithInitial = array.reduce (
//     (accumulator, currentValue, index, array) => {
//         return accumulator + currentValue;
//     },
//     initialValue
// );
// console.log(sumWithInitial);


// const array = [1, 2, 3, 4]; 

// const initialValue = 10;
// const sumWithInitial = array.reduce (
//     (accumulator, currentValue, index, array) => {
//         console.log(accumulator, currentValue, index, array);
//         return accumulator + currentValue;
//     },
//     initialValue
// );
// console.log(sumWithInitial);


// const employees = [
//     { id: 1, name: "Alice", salary: 50000 },
//     { id: 2, name: "Bob", salary: 60000 },
//     { id: 3, name: "Charlie", salary: 55000 },
//     {id: 4,  name: "Diana", salary: 70000},
//     {id: 5, name: "Eve", salary: 45000},
// ];

// const totalSalary = employees.reduce(
//     (sum, employees) => sum + employees.salary, 0
// );

// let averageSalary = totalSalary / employees.length;
// console.log(averageSalary);


// const employees = [
//     { id: 1, name: "Alice", salary: 50000 },
//     { id: 2, name: "Bob", salary: 60000 },
//     { id: 3, name: "Charlie", salary: 55000 },
//     {id: 4,  name: "Diana", salary: 70000},
//     {id: 5, name: "Eve", salary: 45000},
// ];

// const totalSalary = employees.reduce(
//     (sum, employees) => sum + employees.salary, 0
// );

// let averageSalary = totalSalary / employees.length;

// const totalHighSalary = employees.reduce((sum, employee) => {
//     if(employee.salary >= 60000) {
//         return sum + employee.salary;
//     }
//     return sum;
// }, 0);

// console.log(totalHighSalary);


// const numbers = [1, 2, 3, 4, 5]; 

// const max = numbers.reduce(
//     (acc, currentValue) => Math.max(acc, currentValue),
//     -Infinity
// );
// console.log(max);


// let maxNum = Math.max(33, 66);

// console.log(maxNum);


// const numbers = [1, 2, 3, 4, 5];

// let maxNum = Math.max(...numbers);

// console.log(maxNum);


// const arrays =  [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];


// const flattened = arrays.reduce((acc, currentValue) => acc.concat(currentValue),
//  []
// );

// console.log(flattened);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

// const count = fruits.reduce((acc, fruits) => {
//     acc[fruits] = (acc[fruits] || 0) + 1;
//     return acc; 
// }, {})
// console.log(count);


// const people = [
//     { name: "Alice", age: 25},
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 20},
// ];

// const peopleByName = people.reduce((acc, person) => {
//     acc[person.name] = person;
//     console.log(acc);
    
//     return acc;
// }, {}); 

// console.log(peopleByName);



// const people = [
//     { name: "Alice", age: 25},
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 20},
// ];

// const peopleByName = {};

// people.forEach((person) => {
//     peopleByName[person.name] = person;
// });

// console.log(peopleByName);
