// const dragItems = document.querySelectorAll(".drag-item");
// const blanks = document.querySelectorAll(".blank");
// const sentences = document.querySelectorAll(".sentence");

// dragItems.forEach((item) => {
//   item.addEventListener("dragstart", dragStart);
// });

// function dragStart(e) {
//   e.dataTransfer.setData("text/plain", e.target.id);
// }

// blanks.forEach((blank) => {
//   blank.addEventListener("drop", drop);
//   blank.addEventListener("dragover", dragOver);
// });

// function drop(e) {
//   e.preventDefault();
//   const id = e.dataTransfer.getData("text/plain");
//   const dragItem = document.getElementById(id);

//   const optionsContainer = e.target
//     .closest(".question")
//     .querySelector(".options");

//   const allowedAnswers = Array.from(
//     optionsContainer.querySelectorAll(".drag-item")
//   ).map((item) => item.textContent);

//   if (!allowedAnswers.includes(dragItem.textContent)) {
//     alert("Ответ к вопросу не относится");
//   }
//   e.target.append(dragItem);
// }

// function dragOver(e) {
//   e.preventDefault();

//   const existingAnswer = e.target.querySelector(".drag-item");

//   if (existingAnswer) {
//     const optionsContainer = e.target
//       .closest(".question")
//       .querySelector(".options");
//     optionsContainer.append(existingAnswer);
//   }
// }

// sentences.forEach((sentence) => {
//   sentence.addEventListener("dragover", dragOverQuestion);
//   sentence.addEventListener("dragleave", dragLeave);
// });

// function dragOverQuestion(e) {
//   e.target.classList.add("active");
// }

// function dragLeave(e) {
//   e.target.classList.remove("active");
// }

// // Обработчик кнопки "Check Answers"
// document.getElementById("check-answers").addEventListener("click", () => {
//   const correctAnswers = {
//     "blank-1": "ёлка",
//     "blank-2": "лук",
//   };

//   let correctCount = 0; // Счетчик правильных ответов
//   let totalQuestions = Object.keys(correctAnswers).length; // Общее количество вопросов

//   blanks.forEach((blank) => {
//     const userAnswer = blank.querySelector(".drag-item");
//     const blankId = blank.id;

//     if (userAnswer) {
//       const isCorrect =
//         userAnswer.textContent === correctAnswers[blankId];

//       if (isCorrect) {
//         userAnswer.style.backgroundColor = ""; // Сбрасываем цвет, если ответ верный
//         correctCount++; // Увеличиваем счетчик правильных ответов
//       } else {
//         userAnswer.style.backgroundColor = "red"; // Подсвечиваем неправильный ответ
//       }
//     }
//   });

//   // Вычисляем процент правильных ответов
//   const percentageCorrect = ((correctCount / totalQuestions) * 100).toFixed();

//   // Формируем результат
//   const resultText =
//     correctCount === totalQuestions
//       ? `Все ответы верны! (${correctCount} из ${totalQuestions}, ${percentageCorrect}%)`
//       : `Количество правильных ответов: ${correctCount} из ${totalQuestions}. Процент правильных ответов: ${percentageCorrect}%`;

//   // Выводим результат
//   document.getElementById("result").textContent = resultText;
// });

/// 5.23.4///

// const tasksListElement = document.querySelector(".list");
// const taskElements = document.querySelectorAll(".item");
// const checkBtn = document.getElementById("checkBtn");

// for (const task of taskElements) {
//   task.draggable = true;
// }

// tasksListElement.addEventListener("dragstart", (e) => {
//   e.target.classList.add("selected");
// });

// tasksListElement.addEventListener("dragend", (e) => {
//   e.target.classList.remove("selected");
// });

// tasksListElement.addEventListener("dragover", (e) => {
//   e.preventDefault();

//   const activeElement = document.querySelector(".selected");

//   const currentElement = e.target;

//   const isMoveable =
//     activeElement !== currentElement &&
//     currentElement.classList.contains("item");

//   if (!isMoveable) return;
//   // const nextElement =
//   //   currentElement === activeElement.nextElementSibling
//   //     ? currentElement.nextElementSibling
//   //     : currentElement;

//   let nextElement;
//   if (currentElement === activeElement.nextElementSibling) {
//     nextElement = currentElement.nextElementSibling;
//   } else {
//     nextElement = currentElement;
//   }

//   tasksListElement.insertBefore(activeElement, nextElement);
// });

// const checkOrder = () => {
//   const checkArr = [
//     "Встать",
//     "Умыться",
//     "Позавтракать",
//     "Одеться",
//     "Выйти из дома",
//   ];

//   const order = [];

//   const currentTaskElements = tasksListElement.querySelectorAll(".item");

//   currentTaskElements.forEach((task) => {
//     order.push(task.textContent);
//   });

//   const isOrderCorrect = JSON.stringify(order) === JSON.stringify(checkArr);

//   if (isOrderCorrect) {
//     alert("Порядок правильный");
//   } else {
//     alert("Порядок неправильный");
//   }
// };

// checkBtn.addEventListener("click", checkOrder);

/// 5.23.5///


const dropFileZone = document.querySelector(".upload-zone__dragover");
const uploadInput = document.getElementById("upload-form__file");
const filesInfoElement = document.getElementById("file-info");
const filesSentElement = document.getElementById("files-sent");
const fileListElement = document.getElementById("file-list");
const submitButton = document.querySelector(".form-upload__submit");

// Обработчики для drag-and-drop
dropFileZone.addEventListener("dragenter", () => {
  dropFileZone.classList.add("active");
});

dropFileZone.addEventListener("dragleave", () => {
  dropFileZone.classList.remove("active");
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  e.preventDefault();
});

["dragover", "drop"].forEach((event) => {
  document.addEventListener(event, (e) => {
    e.preventDefault();
  });
});

// Массив для хранения всех выбранных файлов
let allFiles = [];

dropFileZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropFileZone.classList.remove("active");
  submitButton.style.display = "block";
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    addFiles(files); // Добавляем файлы
    displayFilesInfo(allFiles); // Отображаем все файлы
  }
});

// Функция для добавления файлов
function addFiles(newFiles) {
  allFiles = allFiles.concat(Array.from(newFiles)); // Добавляем новые файлы
  saveFilesToInput(); // Обновляем файлы в инпуте
}

// Функция для обновления файлов в инпуте
function saveFilesToInput() {
  const tempInput = new DataTransfer();
  allFiles.forEach((file) => tempInput.items.add(file));
  uploadInput.files = tempInput.files;
}

// Обработчик изменения инпута (выбор файлов через кнопку)
uploadInput.addEventListener("change", () => {
  const files = uploadInput.files;
  if (files.length > 0) {
    addFiles(files); // Добавляем файлы
    displayFilesInfo(allFiles); // Отображаем все файлы
  }
});

// Функция для отображения информации о файлах
function displayFilesInfo(files) {
  filesInfoElement.style.display = "block";
  submitButton.style.display = "block";
  fileListElement.innerHTML = ""; // Очищаем список перед добавлением новых файлов

  for (const file of files) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>Загружен файл:</span> ${file.name}<br>
      <span>размером:</span> ${file.size} байт<br>
    `;
    fileListElement.append(listItem);
  }
}

// Функция для очистки инпута
function clearUploadInput() {
  allFiles = []; // Очищаем массив файлов
  const tempInput = new DataTransfer();
  uploadInput.files = tempInput.files;
}

// Обработчик отправки формы
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const files = allFiles; // Используем все файлы из массива

  filesSentElement.style.display = "block";
  submitButton.style.display = "none";

  const filesInfo = files.map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type,
  }));

  console.log("Файлы отправлены:", filesInfo);

  clearUploadInput(); // Очищаем инпут
  fileListElement.innerHTML = ""; // Очищаем список файлов
  filesInfoElement.style.display = "none"; // Скрываем информацию о файлах
  filesSentElement.style.display = "block"; // Показываем сообщение об отправке
});
