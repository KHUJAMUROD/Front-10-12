const blockEl = document.getElementById("content");

let question = +prompt('сколько вым лет', 18)

// let message = question >= 18 ? 'доступ разрешен' : 'доступ огранечен';
let message = "доступ " + (question >= 18 ? "разрешен" : "ограничен")

let className = question >= 18 ? "block-accsess" : "block-restricted";

blockEl.innerHTML = `<div class="block ${className}">${message}</div>`

