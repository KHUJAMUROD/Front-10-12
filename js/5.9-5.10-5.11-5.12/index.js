// function fnMouse() {
//     alert('привет');
// }


// const button = document.querySelector("button");

// button.setAttribute('onclick', "clickFn()");

// function clickFn() {
//     console.log("меня нажали");
// }


// const button = document.querySelector("button");

// button.onclick = clickFn;

// function clickFn() {
//     console.log('привет');

// }


// const button = document.querySelector("button");

// button.onclick = function clickFn() {
//     console.log('привет');
// }


// const button = document.querySelector("button");

// button.addEventListener("mouseleave", () => {
//     console.log('привет');
//     button.style.backgroundColor = "red";
// });


/// 5.10 /// 

// function clickFn() {
//     console.log('меня нажали');
// }


// const button = document.querySelector("button")

// button.setAttribute("onclick", null)



// function clickFn() {
//     console.log('меня нажали');
// }
// const button = document.querySelector("button")

// button.onclick = null;


// const button = document.querySelector("button");

// button.addEventListener("click", handleClick);

// function handleClick() {
//     console.log("кнопка нажата");
// }

// button.removeEventListener("click", handleClick);

/// 5.11 /// 

// const button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// })


// const button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//     console.log(e);
//     e.target.style.backgroundColor = "red"
// });


// const input = document.querySelector("input")

// input.addEventListener('keydown', (el) => {
//     console.log(el);
// })


// const input = document.querySelector("input")

// input.addEventListener('keydown', (e) => {
//     if (e.key === "Enter") {
//         console.log("клавиш Enter нажата");

//     }
// })


// const input = document.querySelector("input")

// input.addEventListener('keydown', (e) => {
//     if (e.key === " ") {
//         console.log("пробел нажат");

//     }
// })


// document.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && event.key === "s" || event.ctrlKey && event.key === "ы") {
//         event.preventDefault();
//         alert("вы нажали  комбинацию клавиш Ctrl + s")
//     }
// });


// document.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && event.code === "KeyS"){
//         event.preventDefault();
//         alert("вы нажали  комбинацию клавиш Ctrl + s")
//     }
// });


// let hasUnsaveChange = false;

// document.addEventListener("input", () => {
//     hasUnsaveChange = true;
// })

// window.addEventListener("beforeunload", (event) => {
//     if (hasUnsaveChange) {
//         event.preventDefault();
//         event.returnValue = "";
//     }
// });

/// 4.12 ///

// const btn = document.getElementById("scrollToTopButton");

// btn.addEventListener("click", scrollToTop);

// function scrollToTop() {
//     window.scrollTo({top: 0, behavior: "smooth"});
// }

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 3000) {
//         btn.style.display = "block";
//     }else {
//         btn.style.display = "none"
//     }
// })
