document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  // Получение значений всех элементов формы
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const search = document.getElementById("search").value;
  const number = document.getElementById("number").value;
  const date = document.getElementById("date").value;
  const remember = document.getElementById("remember").checked;
  const gender = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : null; // Этот код ищет первый элемент <input> с атрибутом name="gender" и состоянием :checked (то есть выбранный элемент). Если такой элемент найден, он возвращается; если нет, возвращается null.
  const volume = document.getElementById("volume").value;
  const color = document.getElementById("color").value;
  const comment = document.getElementById("comment").value;
  const country = document.getElementById("country").value;
  const file = document.getElementById("file").files;

  // Создание массива для хранения имен файлов
  const fileNames = [];
  if (file.length > 0) {
    for (let i = 0; i < file.length; i++) {
      fileNames.push(file[i]);
    }
  }

  // Создание объекта для хранения всех значений
  const formData = {
    username,
    password,
    email,
    phone,
    search,
    number,
    date,
    remember,
    gender,
    volume,
    color,
    comment,
    country,
    files: fileNames,
  };

  // Очистка формы

  document.getElementById("myForm").reset();

  console.log(formData);
});


/// 5.16///

// const people = [
//   {
//     name: "Михаил",
//     age: 27,
//     isMarried: true,
//     hasCar: false,
//   },
//   {
//     name: "Анна",
//     age: 29,
//     isMarried: true,
//     hasCar: true,
//   },
//   {
//     name: "Сергей",
//     age: 33,
//     isMarried: false,
//     hasCar: false,
//   },
//   {
//     name: "Елена",
//     age: 26,
//     isMarried: false,
//     hasCar: true,
//   },
// ];

// const listElement = document.getElementById("list");
// const moreInfo = document.querySelector(".know-more");

// const renderPeople = () => {
//   const peopleHtml = people
//     .map((person, index) => {
//       return `
//     <li class='person'>
//     <p>Имя: ${person.name}</p>
//     <button data-age='${person.age}' data-status='${
//         person.isMarried
//       }' data-has-car='${person.hasCar}' data-position='${
//         index + 1
//       }'>Узнать больше</button>
//     </li>
//     `;
//     })
//     .join("");

//   listElement.innerHTML = peopleHtml;
// };
// renderPeople();

// const dataPeople = document.querySelectorAll("button");

// dataPeople.forEach((dataPerson) => {
//   dataPerson.addEventListener('click', () => {
//     const age = dataPerson.dataset.age;
//     const status = dataPerson.dataset.status;
//     const car = dataPerson.dataset.hasCar;
//     const position = dataPerson.dataset.position;

//     moreInfo.innerHTML = "";

//     moreInfo.insertAdjacentHTML('beforeend', 
//       `
//       <p>место в списке: ${position}</p>
//       <p>возраст: ${age} </p>
//       <p>семейное положение: ${status ? "женат/замужем" : "холоост/незамужем"}</p>
//       <p>наличие машины: ${car ? "да" : "нет"}</p>
//       <button id='close'>закрыть</button>
//       `);
//       moreInfo.style.display = "block";
//       moreInfo.innerHTML = "";
//       document.getElementById('close').addEventListener('click', () => {moreInfo.style.display = "none";})
//   });
// });


