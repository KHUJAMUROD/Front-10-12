/// 6.1 ///

// console.log(1);

// function delay(ms) {
//   const start = Date.now();
//   while (Date.now() - start < ms) {

//   }
// }

// delay(5000);
// console.log(2);
// console.log(3);

// function outer() {
//     function inner() {
//         console.log(1);
//     }

//     inner();
// }
//     outer();

/// 6.2 ///

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if(success) {
//             resolve("данные успешно получены");
//         }else {
//             reject("ошибка при получения данных");
//         }
//     }, 2000);
// });

// console.log(request);


// const request = new Promise((resolve, reject) => {
//     const success = Math.random();

//     if (success > 0.5) {
//         resolve("успех значения больше 0.5" );
//     }else {
//         reject(new Error("ошибка при получения данных"));
//     }
// });


// request
//     .then((data) => {
//     console.log(data);

// })
//     .catch((error) => {
//     console.error(error);
// })
//     .finally(() => {
//     console.log('операция завершина');
// })


// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Error("ошибка!"));
//     }, 1000);
// });

// request.catch(
//     (result) => console.log(result),
//     (error) => console.log(error)
// );


// const request = new Promise((resolve, reject) => {
//     const success = 0.7;

//     if (success > 0.5) {
//         resolve(`"успех значения больше 0.5", ${success}`);
//     }else {
//         reject(new Error("ошибка при получения данных"));
//     }
// });


// request
//     .then((data) => {
//     console.log(data);

// })
//     .catch((error) => {
//     console.error(error);
// })
//     .finally(() => {
//     console.log('операция завершина');
// })




// const request = new Promise((resolve, reject) => {
//   const success = 0.7;

//   if (success > 0.5) {
//     resolve(success);
//   } else {
//     reject();
//   }
// });

// request
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Ошибка при получении данных");
//   })
//   .finally(() => {
//     console.log("Операция завершена");
//   });



//   function request(url, onSuccess) {
//     /*...*/
//   }

//   request("/api/users/1", function (user) {
//     request(`/api/photos/${user.id}/`, function (photo) {
//       request(`/api/avatars/${photo.id}/`, function (response) {
//         console.log(response);
//       });
//     });
//   });


//   //
//   function request(url) {
//     return new Promise(function (resolve, reject) {
//       let responseFromServer;
//       /*...*/
//       resolve(responseFromServer);
//     });
//   }

//   request("/api/users/1")
//     .then((user) => request(`/api/photos/${user.id}/`))
//     .then((photo) => request(`/api/avatars/${photo.id}/`))
//     .then((response) => console.log(response));


/// 6.3 ///


// const request = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// request
// .then((result) => {
// console.log(result);
// return result * 2;
// })
// .then((result) => {
// console.log(result);
// return result * 2;
// })
// .then((result) => {
// console.log(result);
// return result * 2;
// })

// const startAt = Date.now();
// console.log(startAt);

// const request = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// request
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((data) => {
//     console.log(data); 
//     console.log("время:" + (Date.now() - startAt));
//     return data;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2; 
//   })
//   .then((result) => {
//     console.log(result); 
//     return result * 2;
//   })
//   .then((finallyResult) => {
//     console.log("финальный результат:", finallyResult); 
//   });


// const request = new Promise((resolve, reject) => {
//   const success = 0.4;
//   if (success > 0.5) {
//     resolve(success);
//   } else {
//     reject(success);
//   }
// });

// request
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then(
//     (finallyResult) => {
//       console.log("финальный результат:", finallyResult);
//     },
//     (error) => {
//       console.error("мало:", error);
//     }
//   );




// const request = new Promise((resolve, reject) => {
//   const success = 0.4;
//   if (success > 0.5) {
//     resolve(success);
//   }else {
//     reject(success);
//   }
// });

// request
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;    
//   })
//   .then((finallyResult) => {
//     console.log(finallyResult);
//   })
//     .catch((error) => {
//       console.error("мало:", error);
//       throw new Error("критическая ошибка");
//     })
//     .catch((error) => {
//       console.error("обрпботка критическая ошибки", error.message);  
//     })

//     .then((result) => {
//       console.log("продолжения после обработки ошибки:", result);
//     });




// const request = new Promise((resolve, reject) => {
//   const success = 0.9; // Меняйте значение, например, 0,4, 0.6, 0.9
//   if (success > 0.5) {
//     resolve(success);
//   } else {
//     reject("Ошибка на первом этапе");
//   }
// });

// request
//   .then((result) => {
//     console.log("Первый then:", result);
//     if (result < 0.7) {
//       throw new Error("Ошибка во втором then");
//     }
//     return result * 2;
//   })
//   .then((result) => {
//     console.log("Второй then:", result);
//     return result * 2;
//   })
//   .catch((error) => {
//     console.error("Первый catch:", error);
//     return "Значение по умолчанию"; // Возвращаем значение для продолжения
//   })
//   .then((result) => {
//     console.log("Третий then:", result);
//     throw new Error("Ошибка в третьем then"); // Пробрасываем новую ошибку
//   })
//   .catch((error) => {
//     console.error("Второй catch:", error.message);
//     return "Новое значение по умолчанию"; // Возвращаем значение для продолжения
//   })
//   .then((result) => {
//     console.log("Четвертый then:", result);
//   });


/// 6.4 ///

// fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then((response) => {
//     return response.json();
//   }).then(console.log)



const loader = document.getElementById("loader");

function getData() {
  loader.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    })
    .then((data) => {
      console.log("Данные получены:", data);
      renderData(data);
    })
    .catch((error) => {
      if (error.message === "Failed to fetch") {
        console.error("Ошибка: Нет подключения к интернету.");
      } else {
        console.error("Ошибка:", error.message);
      }
    })
    .finally(() => {
      loader.style.display = "none";
    });
}

function renderData(posts) {
  const container = document.getElementById("posts-container");

  // Очищаем контейнер перед добавлением новых данных
  container.innerHTML = "";

  // Создаем HTML-элемент для каждого поста
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Заголовок поста
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    // Текст поста
    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;

    // Добавляем заголовок и текст в элемент поста
    postElement.append(titleElement);
    postElement.append(bodyElement);

    // Добавляем пост в контейнер
    container.appendChild(postElement);
  });
}

const btn = document.getElementById("button");
btn.addEventListener("click", getData);




