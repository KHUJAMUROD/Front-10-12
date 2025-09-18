//  setTimeout(() => {
//     console.log("прошло 5 секунд");
//  }, 2000)


// function logMessage(name) {
//     console.log( "прошло 5 секунд");
// }


// setTimeout(logMessage, 5000);

// console.log("этот код будет выполнен сразу");



// setTimeout((name, age) => {
//     console.log(`привет, ${name}! тебе ${age} лет`);
// }, 2000, "иван", 30)



// const timeId = setTimeout(() => {
//     console.log("прошло 5 секунд");
// }, 5000);


// setTimeout(() =>{
//     clearTimeout(timeId);
//     console.log("таймер отменен");
// }, 3000)


// const timeId = setTimeout(() => {
//     console.log("прошло 10 секунд");
// }, 10000);

// function checkForCancel() {
//     const userInput = prompt("введите 'отмена' для отмены таймера");

//     if (userInput.toLowerCase() === "отмена") {
//         clearTimeout(timeId);
//         console.log("таймер отменен");
//     }else {
//         setTimeout(checkForCancel, 1000)
//     }
// }

// setTimeout(checkForCancel, 1000)



// const timeId = setTimeout(() => {
//     console.log("прошло 10 секунд");
// }, 10000);

// function checkForCancel() {
//     const userInput = prompt("введите 'отмена' для отмены таймера");

//     if (userInput && userInput.toLowerCase() === "отмена") {
//         clearTimeout(timeId);
//         console.log("таймер отменен");
//     }else {
//         setTimeout(checkForCancel, 1000)
//     }
// }

// setTimeout(checkForCancel, 1000)




//  let timeId = setInterval(()=> {
//     alert("tick");
//  }, 2000);

//  setTimeout(() => {
//     clearInterval(timeId);
//     alert("STOP")
//  }, 8000)



// let timeId = setTimeout(function tick() {
//     alert("tick");
//     timeId = setTimeout(tick, 2000)
// }, 2000);
<<<<<<< HEAD
=======



let interval = 1000;

>>>>>>> ee18498bbc428b60f4d75e7e5d35611ed3f4121f



// let interval = 1000;

// function tick() {
//     console.log("tick " + interval);
//     interval += 1000;

//     setTimeout(tick, interval);
// }

// tick()





//  const timer = (deadline) => {
//     setInterval(() => {
//     console.log(deadline);
//     }, 1000);
//  }
//  timer(3)



// const timer = (deadline) => {
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);
//     setTimeout (() => {
//         clearInterval(interval);
//         console.log("время истекло");
//     }, deadline * 1000 )
// };
// timer(3);




// const timer = (deadline) => {
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);
//     setTimeout (() => {
//         clearInterval(interval);
//         console.log("время истекло");
//     }, deadline * 1000 )
// };
// timer("tt");




// const timer = (deadline) => {
//     if (isNaN(+deadline)) {
//         console.log("передано некорректное число");
//         return;
//     }
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);
//     setTimeout(() => {
//         setInterval(interval);
//         console.log("время истекло");
//     }, deadline * 1000);
// };

// const deadline = +prompt("на сколько секунд вы хотите установить таймер");

// timer(deadline);



// console.log("привет я иду первым!");

// setTimeout(() => console.log("теперь иду я!?"), 2000);

// setTimeout(() => console.log("когда моя очерадь"), 0);

// console.log("разве я последний?");


       