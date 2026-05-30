/// 5.21 ///
// const themeSwitch = document.getElementById('themeSwitch');
// let userHasChoseTheme = false;
// themeSwitch.addEventListener("change", toggleTheme);

// function toggleTheme() {
//     const currentTheme = document.documentElement.getAttribute("data-theme");

//     let newTheme;
//     if (currentTheme === "dark") {
//         newTheme = "light";
//     }else {
//         newTheme = "dark";
//     }   

//     userHasChoseTheme = true;

//     setTheme(newTheme);
// }
// function setTheme(theme) {
//     document.documentElement.setAttribute("data-theme", theme);
//     if (userHasChoseTheme) {
//         localStorage.setItem("theme", theme);
//     }
// }

// const savedTheme = localStorage.getItem("theme");
// if(savedTheme) {
//     setTheme(savedTheme);
// }else {
//     const themeByBrowser = getThemeByBrowserSettings();
//     if(themeByBrowser === "dark") {
//         setTheme("dark");
//     }else{
//          const getThemeByTime = getThemeByTime();
//     setTheme(themeByTime);
//     }
// }

// function getThemeByTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     return hours >= 7 && hours < 22 ? "light" : "dark";
// }

// function getThemeByBrowserSettings() {
//     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         return "dark";
//     } else {
//         return "light";
//     }
// }


/// 5.23.1///

// Получаем элементы

// const dropArea = document.getElementById("drop");
// const dragElement = document.getElementById("drag");
// const dragImg = document.getElementById("drag-img");

// dragElement.addEventListener("dragstart", dragStartHandler);
// dragImg.addEventListener("dragstart", dragStartHandler);

// function dragStartHandler(event) {
//   event.dataTransfer.setData("text/plain", event.target.id);
//   dragElement.classList.add("dragging");
//   dragImg.classList.add("dragging");
// }

// dragElement.addEventListener("dragend", dragEndHandler);

// function dragEndHandler() {
//   dragElement.classList.remove("dragging");
// }

// dropArea.addEventListener("dragenter", dragEnterHandler);

// function dragEnterHandler(event) {
//   event.preventDefault();
//   dropArea.classList.add("dragover");
// }

// dropArea.addEventListener("dragleave", dragLeaveHandler);

// function dragLeaveHandler(event) {
//   event.preventDefault();
//   dropArea.classList.remove("dragover");
// }

// dropArea.addEventListener("dragover", dragOverHandler);

// function dragOverHandler(event) {
//   event.preventDefault();
// }

// dropArea.addEventListener("drop", dropHandler);

// function dropHandler(event) {
//   event.preventDefault();
//   const id = event.dataTransfer.getData("text/plain");
//   console.log(id);
//   dragElement.style.backgroundColor = "lightpink";
//   dropArea.append(dragElement);
// }

/// 5.23.2///

const dragItems = document.querySelectorAll(".answers div");

dragItems.forEach((item) => {
    item.addEventListener('dragstart', dragstart);
});

function dragstart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

const dropZones = document.querySelectorAll('.drop-zone');

dropZones.forEach((zone) => {
    zone.addEventListener('dragover',  dragOver);
    zone.addEventListener('drop',  drop);
});


function dragOver(event) {
    event.preventDefault();
}


function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const dragItem = document.getElementById(id);
    event.target.append(dragItem);
}

document.getElementById('check-answers').addEventListener('click', () => {

    let score = 0;
    const correctAnswers = {
        "drop-zone-1" : "drag-item-1",
        "drop-zone-2" : "drag-item-2",
    }

    dropZones.forEach((zone) => {
        const zoneId = zone.id;
        const droppedItem = zone.querySelector('[id^="drag-item-"]');
        console.log(zoneId);
        console.log(droppedItem.id);
        console.log(correctAnswers[zoneId]);
        if (droppedItem && droppedItem.id === correctAnswers[zoneId]) {
            score++;
        }        
    });
    const resultText = score === 2 ? 'Все ответы верные!' : `правильных ответов ${score}`;
    document.getElementById('result').textContent = resultText;
});
