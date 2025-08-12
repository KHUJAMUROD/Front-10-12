// const obj = { a: 1, b: 2, c: 3};
// const keys = Object.keys(obj);
// console.log(keys);

// const obj = { a: 1, b: 2, c: 3};
// const keys = Object.keys(obj);

// keys.forEach((key) => {
//     console.log(`${key}`);
// })



// const obj = { a: 1, b: 2, c: 3};
// const keys = Object.keys(obj);

// keys.forEach((key) => {
//     console.log(`${key}:  ${obj[key]}`);

// })



// const users = {
//     alice: {
//         name: 'Alice',
//         age: 28,
//         email:'alice@example.com'
//     },
//     bob: {
//         name: 'Bob',
//         age: 34,
//         email:'bob@example.com'
//     },
//     charlie: {
//         name: 'Charlie',
//         age: 22,
//         email:'charlie@example.com'
//     },
// };
// const keys = Object.keys(users);
// console.log(keys);

// keys.forEach((key) =>{
//     console.log(`пользователь: ${users[key].name}`);
//     console.log(`возраст: ${users[key].age}`);
//     console.log(`Email: ${users[key].email}`);
//     console.log('---');
// });



// const users = {
//     alice: {
//         name: 'Alice',
//         age: 28,
//         email:'alice@example.com'
//     },
//      bob: {
//         name: 'Bob',
//         age: 34,
//         email:'bob@example.com'
//     },
//     charlie: {
//         name: 'Charlie',
//         age: 22,
//         email:'charlie@example.com'
//     },
// };
// const keys = Object.keys(users);

// keys.forEach((key) =>{
//     const user = users[key]
//     // console.log(`пользователь: ${user[key].name}`); // error
//     // console.log(`возраст: ${user[key].age}`); // error
//     // console.log(`Email: ${user[key].email}`); // error
//     console.log(`пользователь: ${user.name}`);
//     console.log(`возраст: ${user.age}`);
//     console.log(`Email: ${user.email}`);
//     console.log('---');

// })


// const users = {
//     alice: {
//         name: 'Alice',
//         age: 28,
//         email:'alice@example.com'
//     },
//      bob: {
//         name: 'Bob',
//         age: 34,
//         email:'bob@example.com'
//     },
//     charlie: {
//         name: 'Charlie',
//         age: 22,
//         email:'charlie@example.com'
//     },
// };
// const keys = Object.keys(users);
// // console.log(keys);


// const filteredKeys = keys.filter((key) => users[key].age > 30)
// // console.log(filteredKeys);

// filteredKeys.forEach((key) => {
//     const user = users[key]
//     console.log(`пользователь: ${user.name}`);
//     console.log(`возраст: ${user.age}`);
//     console.log(`Email: ${user.email}`);
//     console.log('---');

// })




// const obj = {a: 1, b: 2, c: 3};
// const values = Object.values(obj);
// console.log(values);


// const obj = { a: 1, b: 2, c: 3 };
// const values = Object.values(obj);
// values.forEach((value) => {
//     console.log(value);
// });



// const products = {
//     apple: {
//         name:'яблоки',
//         price: 80
//     },
//     banana: {
//         name: 'бананы',
//         price:100
//     },
//     orange: {
//         name:'апельсины',
//         price:150
//     }
// };

// const fruits = Object.values(products);
// console.log(fruits);


// fruits.forEach((fruit) => {
//     console.log(`продукт: ${fruit.name}, цена ${fruit.price} руб.`);

// })



//  const obj = {a: 1, b: 2, c: 3};
//  const entries = Object.entries(obj);
//  console.log(entries);



//   const obj = {a: 1, b: 2, c: 3};
//  const entries = Object.entries(obj);
// console.log(entries);

//  entries.forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//  })



// const users = {
//     alice: {
//         name: 'Alice',
//         age: 22,
//         grade: 5,
//     },
//     bob: {
//         name: 'Bob',
//         age: 24,
//         grade: 4,
//     },
//     charlie: {
//         name: 'Charlie',
//         age: 21,
//         emgrade: 3,
//     },
// };

// const entries = Object.entries(users);
// console.log(entries)



// const users = {
//     alice: {
//         name: 'Alice',
//         age: 22,
//         grade: 5,
//     },
//     bob: {
//         name: 'Bob',
//         age: 24,
//         grade: 4,
//     },
//     charlie: {
//         name: 'Charlie',
//         age: 21,
//         grade: 3,
//     },
// };

// const entries = Object.entries(users);


// console.log(entries);

// entries.forEach(([key, student]) => {
//     console.log(`ID студента ${key}`);
//     console.log(`Имя студента ${student.name}`);
//     console.log(`Возраст  ${student.age}`);
//     console.log(`Оценка ${student.grade}`);
//     console.log(`---`);

// })




// const users = {
//     alice: {
//         name: "Alice",
//         age: 22,
//         grade: 5,
//     },
//     bob: {
//         name: "Bob",
//         age: 24,
//         grade: 4,
//     },
//     charlie: {
//         name: "Charlie",
//         age: 21,
//         grade: 3,
//     },
// };

// const entries = Object.entries(users);

// const filteredStudents = entries.filter(([,student]) => student.grade === 5);
// console.log(filteredStudents);

// filteredStudents.forEach(([key, student]) => {
//     console.log(`ID студента ${key}`);
//     console.log(`Имя студента ${student.name}`);
//     console.log(`Возраст  ${student.age}`);
//     console.log(`Оценка ${student.grade}`);
//     console.log(`---`);

// });




// const book = [
//     {name: "происхождения государства", pageCount: 17},
//     {name: "понятия и признаки государства", pageCount: 33},
//     {name: "функция государства", pageCount: 45},
//     {name: "форма государства", pageCount: 60},
//     {name: "политический режим государства", pageCount: 75},
// ];
// console.log(book[1].pageCount);




// const newspaper = {
//     sports: 'Сколько "стоит" футболист?',
//     sportsWriters: ["Евгений Лодыгин", "Михаил Старков", "Жанна Ларионова"],
//     business: "Банкроство или кредитное рабство?",
//     businessWriters: ["Роман Цветков", "Ибрагим Мамедов", "Владимир Левин",],
//     health: "Жиросжигатель из сладкого?",
//     healthWriters:["Ирина Волан","Екатерина Заостровцева", "Тимур Голаев"],
// };

// const transFormNewsPaper = {}

// Object.keys(newspaper).forEach((key) => {
//     if (key.endsWith("Writers")) {
//         const section = key.slice(0, -7);
//         transFormNewsPaper[section] = {
//             title:newspaper[section],
//             writers:newspaper[key],
//         };
//     }
// });

// console.log(transFormNewsPaper);



// const newspaper = {
//     sports: 'Сколько "стоит" футболист?',
//     sportsWriters: ["Евгений Лодыгин", "Михаил Старков", "Жанна Ларионова"],
//     business: "Банкроство или кредитное рабство?",
//     businessWriters: ["Роман Цветков", "Ибрагим Мамедов", "Владимир Левин",],
//     health: "Жиросжигатель из сладкого?",
//     healthWriters:["Ирина Волан","Екатерина Заостровцева", "Тимур Голаев"],
// };

// const transFormNewsPaper = {}

// Object.keys(newspaper).forEach((key) => {
//     if (key.endsWith("Writers")) {
//         const section = key.slice(0, -7);
//         transFormNewsPaper[section] = {
//             title:newspaper[section],
//             writers:newspaper[key],
//         };
//     }
// });

// Object.entries(transFormNewsPaper).forEach(([section, info]) => {
//     console.log(`раздел: ${section}`);
//     console.log(`заголовка: ${info.title}`);
//     console.log(`Авторы: ${info.writers.join(', ')}`);
//     console.log(`---`);
// });


const friends = [
    {
        name: "Серёжа",
        comment: "поболтаем",
    },
    {
        name: "петр",
        comment: "давайте",
    },
    {
        name: "Ольга",
        comment: "ребенка, как сходили в кино?"
    }
]



// const listElement = document.getElementById("list");
// const nameInputElement = document.getElementById("name-input");
// const commentInput = document.getElementById("comment-input");
// const addCommentButton = document.getElementById("add-comment-button");


// function renderFriends() {
//     let friendsHtml = '';
//     friends.forEach((friend) => {
//         friendsHtml += ` <li class="friend">
//             <p>${friend.name}</p>
//             <div class="comments">
//                 <p class="comment">${friend.comment}</p>
//             </div>
//         </li>`;
//     });

//     listElement.innerHTML = friendsHtml;
// }
// renderFriends()





// addCommentButton.addEventListener("click", () => {
//     const name = nameInputElement.value.trim();
//     const comment = commentInput.value.trim();

//     if (name && comment) {
//         friends.push({
//             name: name,
//             comment: comment,
//         });
//         renderFriends();


//         nameInputElement.value = "";
//         commentInput.value = "";
//     } else{
//         alert('Пожалуйста, введите имя и комментарий')
//     }
// });













// function functionWithError() {
// throw new Error("Some error");
// throw console.error("Some error");
// }

// console.log(functionWithError());
// console.log("continue");


// const num1 = parseFloat(prompt("Введите первое число"));
// const num2 = parseFloat(prompt("Введите второе число"));

// if (num2 === 0) {
//     throw new Error("Деление на ноль невозможно");
//     console.log(`продолжения выполнения скрипта`);
// }

// console.log(`результат деления: ${num1 / num2}`);
// console.log(`продолжения выполнения скрипта`);



// const num1 = parseFloat(prompt("Введите первое число"));
// const num2 = parseFloat(prompt("Введите второе число"));
// const errorMessageElement = document.getElementById('error-message');
// const afterErrorElement = document.getElementById('after-error-message');

// function calc(num1, num2) {
//     if (num2 === 0) {
//         throw new Error("Деление на ноль невозможно")
//     }

//     result = num1 / num2;
//     return result;

// }

// try {
//     calc(num1, num2);
//     console.log(`Результат деления ${result}`);
// } catch (error) {
//     errorMessageElement.textContent = `ошибка: ${error}`
//     console.log(`Ошибка: ${error}`);
//     console.log(`Ошибка: ${error.name}`);
//     console.log(`Ошибка: ${error.message}`);
// } finally {
//     afterErrorElement.textContent = `повторите правила деления `
//     console.log("продолжения выполнения скрипта");
// }

// console.log("Еще одно продолжения выполнения скрипта");

