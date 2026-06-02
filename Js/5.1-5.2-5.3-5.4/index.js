// window.alert(10);

// console.log(global);

// console.log(Object.getOwnPropertyNames(global));

// global.console.log(10);

// globalThis.console.log(10);
  

// const container = document.getElementById("container")

// function updateElements() {
//     const width = window.innerWidth;
//     let numberOfItems;

//     if(window < 600) {
//         numberOfItems = 2;
//     }else if (width < 900) {
//         numberOfItems = 4;
//     }else if (width < 1200) {
//         numberOfItems = 6;
//     } else {
//         numberOfItems = 8;
//     }

//     let itemsHTML = '';

//     for (let i = 0; i < numberOfItems; i++) {
//         itemsHTML += '<div class="item"></div>'
//     }
    
//     container.innerHTML = itemsHTML;
// }
// // updateElements()

// window.onload = updateElements;

// window.onresize = updateElements;


// const btn = document.querySelector("button");

// btn.addEventListener("click", goTo);

// function goTo() {
//     window.location.href = "https://github.com/";
// }


// document.querySelectorAll(".myClass").forEach((el) => {
//     console.log(el);
// })


// document.getElementById("myId").addEventListener("click", () => {
//     console.log("привет");
// })

// document.querySelectorAll('.myClass').forEach((el) => {
//     el.addEventListener("click", () => {
//         console.log("hello");
//     })
// })


// document.querySelectorAll('.myClass').forEach((el) => {
//     el.addEventListener("click", message);
// });

// function message() {
//     console.log("Hello");
    
// }


 //////5-3/////////

//  const texEl = document.getElementById("text");
//  const btn = document.getElementById("button");

//  function changeText() {
//     texEl.innerHTML = "<h1 class='text'>новый текст</h1>";
//  }
 
// btn.addEventListener("click", changeText);



//  const texEl = document.getElementById("text");
//  const btn = document.getElementById("button");
//  const input = document.getElementById("userInput") 

//  function changeText() {
//     texEl.innerHTML = userInput.value;
//  }
 
// btn.addEventListener("click", changeText);

////////<img src="," onerror="alert('ха-ха, веши данные украдены!');">`//////



//  const texEl = document.getElementById("text");
//  const btn = document.getElementById("button");

//  function changeText() {
//     texEl.innerHTML += " новый текст".toUpperCase();
//  }
 
// btn.addEventListener("click", changeText);




//  const textEl = document.getElementById("text");
//  const btn = document.getElementById("button");


//  function changeText() {
//     setInterval(() => (textEl.hidden = !textEl.hidden), 300);
//  }
 
// btn.addEventListener("click", changeText);




 //////5-4/////////

// const btn = document.getElementById("sumbitButton");


// btn.addEventListener("click", () => {
//     btn.disabled = true;
//     btn.textContent = "отправка......";


//     setTimeout(() => {
//         btn.disabled = false;
//         btn.textContent = "отправить данные";
//         alert("данные успешно отправлены")
//     }, 3000);
// });

 
