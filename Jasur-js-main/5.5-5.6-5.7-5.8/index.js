/// 5.5 ///

// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li class="items">${item}</li>`).join("");

// listItems.innerHTML = htmlContent;


// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;

// listItems
//  .querySelectorAll("li")
//  .forEach((item) => item.classList.add("pointed-items"));


// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;

// const liElements = listItems.getElementsByTagName("li");

// for (let liElement of liElements) {
//     liElement.classList.add('pointed-items');
//     liElement.classList.add('items');
// };




// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;

// const liElements = listItems.getElementsByTagName("li");

// let i = 0;

// for (let liElement of liElements) {
//     if (i % 2 === 0) {
//         liElement.classList.add('pointed-items');
//         i++;
//         continue;
//     }

//     liElement.classList.add('items');
//     i++;
// };


// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;



// const liElements = Array.from(listItems.getElementsByTagName("li"));
// console.log(liElements);
// const liElements2 = listItems.getElementsByTagName("li");
// console.log(liElements2);

// liElements.forEach((element, index) => {
//     if(index % 2 === 0) {
//         element.classList.add("pointed-items")
//     }else {
//         element.classList.add("items")
//     }
// });


// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;
// listItems.style.cursor = 'pointer'


// const liElements = Array.from(listItems.getElementsByTagName("li"));
// console.log(liElements);


// liElements.forEach((element) => {
//     element.addEventListener('click', () => {
//         element.style.cursor = 'pointer'
//         element.classList.toggle("items")
//     });
// });


// liElements.addEventListener('click', () => {
//     liElements.style.cursor = 'pointer'
//     liElements.classList.toggle("items")
// });


// listItems.addEventListener("click", () => {
//     listItems.classList.toggle("items")
// })



// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li class="items">${item}</li>`).join("");

// listItems.innerHTML = htmlContent;

// listItems.style.display = "flex";
// listItems.style.flexDirection = "column";
// listItems.style.marginTop = "100px";
// listItems.style.backgroundColor = "green";


// const listItems = document.getElementById("list");

// const items = ["пункт 1", "пункт 2", "пункт 3", "пункт 4", "пункт 5",];

// const htmlContent = items.map((item) => `<li>${item}</li>`).join("");

// listItems.innerHTML = htmlContent;

// listItems.style.cssText = "background-color: yellow; color:green; font-size: 2rem;"

/// 5.6 ///

// const element = document.querySelectorAll('[class="active-error"]');

// const disabledButtons = document.querySelectorAll("[disabled]");

// console.log(disabledButtons);

// const element = document.querySelectorAll('[class*="active"]');

// console.log(element);


// const elByNumberId = document.querySelectorAll('[id^="11"]');

// console.log(elByNumberId);

// const elementWithLink1 = Array.from(document.querySelectorAll('[href$="1.html"]'));
// const elementWithLink2 = document.querySelectorAll('[href$=".html"]');
// // 
// elementWithLink2.forEach((el) => {
//     el.removeAttribute('href');
// });

// console.log(elementWithLink2);

// const elementWithLink = document.querySelectorAll('[class*="active"]');
// const elementWithLink = document.querySelectorAll('.active');

// elementWithLink.forEach((el) => {
//     el.setAttribute("class", "inactive");
// });
// console.log(elementWithLink);


// const elementWithLink = document.querySelectorAll('[class*="active"]');

// elementWithLink.forEach((el) => {
//     el.classList.add("inactive");
// });
// console.log(elementWithLink);


// const elementWithLink = document.querySelectorAll('[class*="active"]');

// elementWithLink.forEach((el) => {
//    if(el.classList.contains("active-error")) {
//     el.classList.add
//     ("pointed-text")
//    }
// });
// console.log(elementWithLink);


// let user = true;
// const elementWithLink = document.querySelectorAll('[class*="active"]');

// elementWithLink.forEach((el) => {
//    if(el.classList.contains("active-error") && user) {
//     el.style.display = "none";
//    }
// });

// console.log(elementWithLink);

/// 5.7 ///

// const listElement = document.getElementById("list");

// const element = listElement.children[2];

// console.log(element);


// const listElement = document.getElementById("list");

// const element = listElement.childElementCount;

// console.log(element);


// const liEl = document.getElementById("111");

// const element = liEl.parentElement;
// console.log(element);



// const liEl = document.getElementById("list");

// const element = liEl.firstElementChild;
// console.log(element);



// const liEl = document.getElementById("list");

// const element = liEl.lastElementChild;
// console.log(element);


// const liEl = document.getElementById("list");

// const element = liEl.firstChild;
// console.log(element);


// const liEl = document.getElementById("list");

// const element = liEl.previousElementSibling;
// console.log(element);

// const liEl = document.getElementById("list");

// const element = liEl.nextElementSibling;
// console.dir(element);



// const liEl = document.getElementById("list");

// const element = liEl.lastElementChild.previousElementSibling;
// console.dir(element);


// const liEl = document.getElementById("list");

// const element = liEl.lastElementChild.nextSibling;
// console.dir(element);


// const listElement = document.getElementById("list");

// const element = listElement.querySelector(".active-error")

// console.dir(element);




// const listElement = document.getElementById("list");

// const element = listElement.querySelectorAll(".link")

// console.dir(element);


// const listElement = document.getElementById("list").querySelector(".active-error");

// const exchangeLink = listElement.textContent;

// listElement.innerHTML = `<p>${exchangeLink}</p>`

// console.dir(exchangeLink);


// document.getElementById("btn").addEventListener("click", message);

// function message() {
//     this.textContent = "данные отправляется";
//     this.setAttribute("disabled", "");

//     setTimeout(() => {
//     this.textContent = "получена данные"
//     this.removeAttribute("disabled")
//     }, 3000)
// }


// document.getElementById("toggleButton").addEventListener("click", toggleFn);

// function toggleFn() {
//     const btn = document.getElementById("btn");
//     btn.toggleAttribute("disabled");
// }


// const checkbox1 = document.getElementById("myCheckbox1");
// const checkbox2 = document.getElementById("myCheckbox2");

// const toggleButton = document.getElementById("toggleButton");

// toggleButton.addEventListener("click", () => {
//     checkbox1.toggleAttribute("checked");
//     checkbox2.toggleAttribute("checked");
// });


/// 5-8 ///
// const listToBuy = document.getElementById("to-buy");

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// const newPurchase = this.previousElementSibling.value.trim();
//     console.log(newPurchase);
// }


// const listToBuy = document.getElementById("to-buy");

// document.querySelector("button").addEventListener("click", handleClick);




// function handleClick() {
//     const newPurchase = this.previousElementSibling.value.trim();
//     if (newPurchase) {
//         this.previousElementSibling.value = "";
//         createToBuy(newPurchase)
//     } else {
//         alert("добавьте покупку")
//     }
// }

// function createToBuy(text) {
//     const liEl = document.createElement("li");
//     liEl.textContent = text;
//     liEl.classList.add("item")
//     listToBuy.append(liEl);
//     // listToBuy.prepend(liEl);
//     const liBtn = document.createElement("button");
//     liBtn.textContent = "удалить";
//     liBtn.classList.add("btn");
//     liEl.append(liBtn);
//     addDeleteListener(liBtn, liEl);
// }

// function addDeleteListener(button, item) {
//     button.addEventListener("click", () => {
//         item.remove()
//     })
// }


