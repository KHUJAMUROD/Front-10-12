// const adultsRolesEl = document.getElementById("roles-adults");

// const childrenRolesEl = document.getElementById("roles-children");

// console.log(adultsRolesEl);
// console.log(childrenRolesEl);


// const adultsRolesEl = document.getElementById("roles-adults").innerText;

// const childrenRolesEl = document.getElementById("roles-children").innerText;

// console.log(adultsRolesEl);
// console.log(childrenRolesEl);


// const childrenOne = document.getElementsByClassName("item")[0];
// console.log(childrenOne.innerText);


// const elements = document.querySelector(".item");
// console.log(elements.innerText);


// const elements = document.querySelector("ul");
// console.log(elements.innerText);


// const elements = document.querySelector("ol");
// console.log(elements.innerText);

// const elements = document.querySelector("body");
// console.log(elements.innerText);

// const elements = document.querySelector("#roles-adults");
// console.log(elements.innerText);

// const elements = document.querySelector("#roles-children");
// console.log(elements.innerText);

// const elements = document.querySelectorAll(".item")[1];
// console.log(elements.innerText);

// const allActors = document.querySelectorAll(".item");

// allActors.forEach((actor) => {
//     console.log(actor.innerText);
// })

// const allActors = document.querySelectorAll(".item");

// allActors.forEach((el) => {
//     console.log(el.innerText);
// })

// const allActors = document.querySelectorAll(".item");
// allActors.forEach((el) => {
//     el.style.color = "red";
//     console.log(el.innerText);
// });

// const allActors = document.querySelectorAll(".item");
// allActors.forEach((el, i) => {
//     el.style.color = "red" 
//     if (i >= 2) {
//         el.innerText += " - старшая группа";
//     }
//     console.log(el.innerText);

// })

// const allActors = document.querySelectorAll(".item");
// for (let i = 0; i < allActors.length; i++) {
//     if ( i >= 2 ) {
//         allActors[i].innerText += " - старшая группа";
//     }
//     allActors[i].style.color = "red"; 
// }

// const adultsRolesEl = document.getElementById("roles-adults");
// const childrenRolesEl = document.getElementById("roles-children");

// adultsRolesEl.addEventListener 
// ("click", () => {
//     adultsRolesEl.style.color = "red";
//     alert("взрослые");
// })

// childrenRolesEl.addEventListener
// ("click", () => {
//     childrenRolesEl.style.color = "blue";
//     childrenRolesEl.style.backgroundColor = "gray";
//     alert("дети")
// })

// const adultsRolesEl = document.getElementById("roles-adults");
// const childrenRolesEl = document.getElementById("roles-children");

// adultsRolesEl.addEventListener 
// ("mouseover", () => {
//     adultsRolesEl.style.color = "red";
//     alert("взрослые");
// })

// childrenRolesEl.addEventListener
// ("mouseover", () => {
//     childrenRolesEl.style.color = "blue";
//     childrenRolesEl.style.backgroundColor = "gray";
//     alert("дети")
// })

// document.addEventListener("mouseleave", () => {
//     alert("не уходите у нас для вас уникальный предложения")
// })

// const santaRoleEl = document.getElementById("santa");
// santaRoleEl.innerHTML = "<p>дед мороз - сергей петрович</p>";

// const santraGrandDaughterRoleEl = document.getElementById("santraGrandDaughter");

// console.log(santraGrandDaughterRoleEl.innerText);

// const thirdChiledEl = document.querySelectorAll(".item")[4];
// thirdChiledEl.remove();

// const forthChildEl = document.querySelectorAll(".item")[5];
// forthChildEl.innerText = "настя";

// const childrenRolesEl = document.getElementById("roles-children");
// const oldChildrenRoleEl =  childrenRolesEl.innerHTML;
// childrenRolesEl.innerHTML = oldChildrenRoleEl + "<li class='item'>Таня</li>"




const childRolesEl = document.getElementById("roles-children");
const input = document.getElementById("oneMoreChild");
const button = document.getElementById("addChildButton")



let numberChildren = childRolesEl.children.length;

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addChild();
    }
})

button.addEventListener('click', () => {
    addChild()
});

function addChild() {
    const oneMoreChildInputText = input.value.trim();

    if (oneMoreChildInputText !== '') {
        childRolesEl.innerHTML += `<li class="item">${oneMoreChildInputText} <button class="delete-button">Удалить</button>`;

    }

    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            numberChildren--;
        });
    });

    input.value = "";

    numberChildren++;

    if (numberChildren === 5)

        button.disabled = true;
}


