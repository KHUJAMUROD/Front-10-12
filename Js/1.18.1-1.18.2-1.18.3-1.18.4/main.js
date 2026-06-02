// Урок1.18.1

// const myEl = document;
// const myEl = document.documentElement;
// const myEl = document.documentElement.children;
// const myEl = document.documentElement.children[1];
// const myEl = document.documentElement.children[1].children[2];
// const myEl = document.documentElement.children[1].children[2].children[1];
// const myEl = document.documentElement.children[1].children[2].children[1].innerText;

// console.log(myEl);

// const adultsRolesEl = document.getElementById("roles-adults");
// const adultsRolesEl = document.getElementById("roles-adults").innerText;
// console.log(adultsRolesEl);

// console.log(adultsRolesEl.);


// const childrenOne = document.getElementsByClassName("item");
// const childrenOne = document.getElementsByClassName("item")[0];
// const childrenOne = document.getElementsByClassName("item")[1];
// const childrenOne = document.getElementsByClassName("item")[2];
// const childrenOne = document.getElementsByClassName("item")[3];
// const childrenOne = document.getElementsByClassName("item")[4];
// console.log(childrenOne);

// console.log(childrenOne);
// console.log(childrenOne.innerText); undefined for plural

// const elements = document.querySelector(".item");
// const elements = document.querySelectorAll(".item");
// console.log(elements);

// const elements = document.querySelector("ul");
// const elements = document.querySelector("ol");
// const elements = document.querySelector("p");
// const elements = document.querySelector("body");
// const elements = document.querySelectorAll(".item")[2];
// console.log(elements.innerText);
// console.log(elements);

// const elements = document.querySelector("#roles-children");

// console.log(elements);


// const allActors = document.getElementsByClassName("item");

// const allActors = document.querySelectorAll(".item");

// console.log(allActors)


// allActors.forEach((element, index) => {
//     element.style.color = "red"
//     if(index >= 2) {
//         element.style.color = "dodgerblue"
//         element.innerText += " - старшая группа"
//     }
//     console.log(element.innerText);
// });



// const allActors = document.querySelectorAll(".item");
// allActors.forEach((actor) => {
//     console.log(actor.innerText);
// });


// const allActors = document.querySelectorAll(".item");
// const allActors = document.getElementsByClassName("item");

// console.log(allActors);

// allActors.forEach((el, index) =>{
//     el.style.color = "red";
//      el.style.fontSize = "20px";
//     if(index >= 2) {
//         el.style.color = "green";
//         el.style.fontSize = "30px";
//         el.innerText += " - старшая группа";
//     }
//     console.log(el.innerText);
// });



// for(let i = 0; i < allActors.length; i++) {
//     allActors[i].style.color = "red";
//     if(i >= 2) {
//         allActors[i].style.color = "dodgerblue";
//         allActors[i].innerText += " - старшая группа";
//     }
//     console.log(allActors[i].innerText);
//     // console.log(el.innerText);
// }


// Урок 1.18.2.        


// const adultsRolesEl = document.getElementById("roles-adults");

// const childrenRolesEl = document.getElementById("roles-children");

// adultsRolesEl.addEventListener
// ("mouseover", () => {
//     adultsRolesEl.style.color = "red";
//     alert("Взрослые");
// });
// adultsRolesEl.addEventListener
// ("click", () => {
//     alert("Взрослые");
// });
// childrenRolesEl.addEventListener
// ("click", () => {
//     alert("Дети ");
// });
// adultsRolesEl.addEventListener
// ("mouseover", () => {
//     childrenRolesEl.style.color = "blue";
//     childrenRolesEl.style.
//     backgroundColor = "gray";
//     alert("Дети");
// });


// document.addEventListener("mouseleave", () =>{
//     alert('Не уходите, у нас для Вас уникальное предложение!')
// })



// Урок1.18.3.

// const santaRoleEl = document.getElementById('santa');

// santaRoleEl.innerHTML = "Дед Мороз - Сергей Петрович";
// santaRoleEl.innerHTML = "<p>Дед Мороз - Сергей Петрович</p>";
// santaRoleEl.innerText = "<p>Дед Мороз - Сергей Петрович</p>";
// const santaGrandDaughterRoleEl = document.getElementById("santaGrandDaughter");

// console.log(santaGrandDaughterRoleEl.innerText);
// console.log(santaGrandDaughterRoleEl);


// const thirdChiledEl = document.querySelectorAll(".item")[4];

// thirdChiledEl.remove();


// const forthChildEl = document.querySelectorAll(".item")[5];

// forthChildEl.innerText = "Вася";

// const childrenRolesEl = document.
// getElementById("roles-children");

// const oldChildrenRolesEl = 
// childrenRolesEl.innerHTML;

// childrenRolesEl.innerHTML +=
// "<li class='item'>Таня</li>";

// Урок1.18.4

// const childRolesEl = document.
//     getElementById('roles-children');

// const input = document.
//     getElementById('oneMorechild');

// const button = document.
//     getElementById
//     ('addChildButton');

// let numberChildren = childRolesEl.
//     children.length;

// input.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         addChild();


//     }
// });


// button.addEventListener
//     ("click", () => {
//         addChild
//     });
// function addChild(parasm) {

//     const oneMoreChildInputText = input.
//         value.trim();
//     addChild();
    // console.log(oneMoreChildInputText);


    // if (oneMoreChildInputText !== "") {
    //     childRolesEl.innerHTML += `<li class="item">$
    //     {oneMoreChildInputText}
    //     </li>`;



        // <button
        //  class="delete-button">Удалить<
        //  /button>
         

//         const deleteButtons = document.querySelector(".delete-button");

//         deleteButtons.forEach((btn) => {
//             btn.addEventListener("click",()=> {
//                 btn.parentElement.remove();
//                 numberChildren--;
//                 botton.disabled = false;
//             });
//         });
//     }

//     input.value = "";

//     numberChildren++;

//     if (numberChildren === 5) button.disabled = true;
// }


