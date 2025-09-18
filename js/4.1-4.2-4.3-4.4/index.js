//  const arr = [];

//  arr.push(11)
//  arr.push(22)
//  arr.push(33)
//  console.log(arr);

//  arr.shift()
//  arr.shift()
//  arr.shift()


//  console.log(arr);


//  const arr = [];

//  arr.push(11)
//  arr.push(22)
//  arr.push(33)
//  console.log(arr);


// arr.pop();
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.pop();
// console.log(arr);


// const arr = [1, 2, 3];

// arr.fill(0, 1, 2);

// console.log(arr);


// const arr = [1, 2, 3, 4, 5];

// arr.fill(0, 1, 3);

// console.log(arr);



// const originalArray = [1, 2, 3, 4, 5];

// const newArray = originalArray.slice(0, 4);

// console.log(originalArray);

// console.log(newArray);




// const originalArray = [1, 2, 3, 4, 5];

// const newArray = originalArray.slice(0, 4).reverse();

// console.log(originalArray);

// console.log(newArray);



// const originalArray = [1, 2, 3, 4, 5];

// const newArray = [0, ...originalArray];

// console.log(originalArray);

// console.log(newArray);


// const originalArray = [1, 2, 3, 4, 5];

// const newArray = [ ...originalArray, 6];

// console.log(originalArray);

// console.log(newArray);


// const person = {
//     name: "john",
//     age: 30,
//     weight: 78,
// };
// person.age = 31;

// person.height = 178;

// console.log(person);


// const person = {
//     name: "john",
//     age: 30,
//     weight: 78,
// };

// const person2 = person;

// person2.age = 31;
// person2.isMarried = true; 

// console.log(person); 
// console.log(person2); 


// const person = {
//     name: "john",
//     age: 30,
//     weight: 78,
// };

// const person2 = { ...person, age: 31, height: 178};


// console.log(person); 
// console.log(person2); 



// const person = {
//     name: "john",
//     age: 30,
//     weight: 78,
// };

// const person2 = Object.assign({}, person);

// person2.age = 31;
// person2.isMarried = true;

// console.log(person); 
// console.log(person2); 


// const person = {
//     name: "john",
//     age: 30,
//     params: {
//         weight: 78,
//         height: 178,
//     },
// };

// const person2 = { ...person};
// person2.params.height = 174;

// console.log(person); 
// console.log(person2); 


// const person = {
//     name: "john",
//     age: 30,
//     params: {
//         weight: 78,
//         height: 178,
//     },
// };

// const person2 = Object.assign({}, person);
// person2.params.height = 174;


// console.log(person); 
// console.log(person2); 


// const person = {
//     name: "john",
//     age: 30,
//     params: {
//         weight: 78,
//         height: 178,
//     },
// };

// const person2 = JSON.parse(JSON.stringify (person));
// person2.params.height = 174;


// console.log(person); 
// console.log(person2); 


// const person = {
//     name: "john",
//     age: 30,
// };

// const updatePersonOne = increasePersonAge(person);

// function increasePersonAge(person) {
//     const updatePerson = Object.assign({}, person);
//     updatePerson.age += 1;
//     return updatePerson;
// }

// console.log(person);
// console.log(updatePersonOne);



// const listFruits = ["груша", "апельсин", "помело", "банан", "яблоко"];

// listFruits.sort();

// console.log(listFruits);



// function compareNum(a, b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }


// const listNumbers = [10, 2, 23, 5, 100];

// listNumbers.sort((a, b) => a - b);

// console.log(listNumbers);



// function compareNum(a, b) {
//    return a - b;
// }

// const listNumbers = [10, 2, 23, 5, 100];

// listNumbers.sort((a, b) => a - b);

// console.log(listNumbers);



// const compareNum = (a, b) => b - a;

// const listNumbers = [10, 2, 23, 5, 100];

// listNumbers.sort(compareNum);

// console.log(listNumbers);



// function sorting(arr, compareFunction) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const condition = compareFunction
//                 ? compareFunction(arr[i], arr[j]) > 0
//                 : arr[i].toString() > arr[j].toString();

//             if (condition) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const listFruits = ["груша", "апельсин", "помело", "банан", "яблоко"];

// console.log(sorting(listFruits));



// function compareNum(a, b) {
//     return a - b;
// }

// function sorting(arr, compareFunction) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const condition = compareFunction
//             ? compareFunction(arr[i], arr[j]) > 0 
//             : arr[i].toString() > arr[j].toString();

//             if (condition) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const listNumbers = [10, 2, 23, 5, 100];
// listNumbers.sort(compareNum);
// console.log(listNumbers);



// const listUsers = [
//   { name: "Anna", age: 31 },
//   { name: "Vasilii", age: 25 },
//   { name: "Dmitrii", age: 9 },
//   { name: "Inga", age: 51 },
//   { name: "Nikolai", age: 16 },
// ];

// // сравниваем объекты со свойствами name и age: {name: 'Ivan', age: 23}
// // При сравнении объектов важно определиться, по какому свойству мы будем их сравнивать,
// // Давайте в нашем примере сравним по имени (name)
// function compareUsers(a, b) {
//   if (a.age > b.age) return 1;
//   if (a.age < b.age) return -1;
//   return 0;
// }

// function sorting(arr, compareFunction) {
//   // запускаем первый цикл
//   for (let i = 0; i < arr.length; i++) {
//     // запускаем второй цикл, в котором будем сравнивать arr[i] с каждым следующим элементом
//     for (let j = i + 1; j < arr.length; j++) {
//       const condition = compareFunction // если этот параметр не будет передан, то здесь будет undefined, т. е. ложь (false)
//         ? compareFunction(arr[i], arr[j]) > 0 // Поскольку теперь compareFunction передана, истинность или ложность condition будет определяться ею, отчего будет зависеть переставлять местами элементы массива или нет.
//         : arr[i].toString() > arr[j].toString(); // При переданной compareFunction этот участок кода не участвует в алгоритме
//       // если arr[i] окажется больше следующего элемента, то меняем их местами (метод "пузырька"). 
//       if (condition) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

//  sorting(listUsers, compareUsers);
// console.log(listUsers);


// const listFruits = ["груша", "апельсин", "помело", "банан", "яблоко"];
// listFruits.sort();
// console.log(listFruits);

 
// function compareWords(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }

// const words = ["reserve", "premier", "communique", "cafe", "adieu", "eclair"]

// words.sort();
// console.log(words);

 

// const listNumbers = [10, 2, 23, 5, 100];

// listNumbers.sort((a, b) => a - b);

// console.log(listNumbers);



// function compareFunction(a, b) {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0;
// }

// const listUsers = [
//   { name: "Anna", age: 31 },
//   { name: "Vasilii", age: 25 },
//   { name: "Dmitrii", age: 9 },
//   { name: "Inga", age: 51 },
//   { name: "Nikolai", age: 16 },
// ];

// const sortedListUsers = listUsers.sort(compareFunction);
// console.log(sortedListUsers);



// const arr = [3, 4, 6, 7, 88, 45, 66];

// const even = arr.filter((el) => el % 2 === 0);

// console.log(even);


// const arr = [3, 4, 6, 7, 88, 45, 66];

// const filteredNumbers = arr.filter((num) => num > 10)

// console.log(filteredNumbers);


 
// const words = ['рябина', 'ива', 'клен', 'тополь', 'черемуха'];

// const longWords = words.filter((word) => word.length > 5)

// console.log(longWords);





// const people = [
// { name: "alice", age: 25},
// { name: "bob", age: 30},
// { name: "john", age: 12},
// ];

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);



// const topics = [
//   "JavaScript Basics",
//   "Python for Beginners",
//   "Advanced JavaScript",
//   "PHP for Beginners"
// ]

// const jsTopics = topics.filter((topic) => topic.toLowerCase().includes("javascript"));
// console.log(jsTopics);
// console.log(topics);




const incompleteTasks = tasks.filter((task) => !task.completed);

const taskList = document.getElementById("task-list");

let taskItems = "";

incompleteTasks.forEach(task =>{
  taskItems += `<li>${task.description}</li>`;
});

taskList.innerHTML = taskItems; 