// document.getElementById("button").addEventListener("click", fetchData);

// async function fetchData() {
//     try {
//         const response = await fetch(
//             "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos"
//         );
//         const data = await response.json();

//         if (!response.ok) {

//             if (response.status === 401) {
//                 throw new Error("Пользователь не авторизован")
//             } else if (response.status === 404) {
//                 throw new Error(`Ресурсы не найден, ${response.status}`);
//             } else if (response.status === 500) {
//                 throw new Error("ошибка ответа сервера");
//             } else {
//                 throw new Error (`ошибка HTTP:, ${response.status}`)
//             }
//         }

//         console.log(data);
//     } catch (error) {
//         console.error(error.message);
//     }
// }




// document.getElementById("button").addEventListener("click", fetchData);

// async function fetchData() {
//     try {

//         let fetchError;
//         const response = await fetch(
//             "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos773"
//         );
//         const data = await response.json();

//         if (!response.ok) {
//             fetchError = response.status;
//         }

//         console.log(data);
//     } catch (error) {
//         if(fetchError === 401) {
//             console.error("пользователь не авторизован (401)");
//         } else if (fetchError === 404) {
//             console.error("ресурс не найден (404)");
//         } else if (fetchError === 500) {
//             console.error("ошибка сервера (500)");
//         }else {
//             console.error(`неизвестный ошибка, ${error.message}`);
//         }
//     }
// }


// document.getElementById("button").addEventListener("click", fetchData);

// async function fetchData() {
//     try {

//         let fetchError;
//         const response = await fetch(
//             "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos773"
//         );
//         const data = await response.json();

//         if (!response.ok) {
//             fetchError = response.status;
//         }

//         console.log(data);
//     } catch (error) {
//         if(error.message === 'failed to fetch') {
//             console.error('ошибка сети: не удалось выполнить запрос. Возможно нет интернета. Попробуйте позже.')
//         }
//     }
// }



document.getElementById("button").addEventListener("click", fetchData);

async function fetchData() {
    try {
        const response = await fetch(
            "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos333"
        );
        

        if (!response.ok) {

            if (response.status === 401) {
                throw new Error("Пользователь не авторизован")
            } else if (response.status === 404) {
                throw new Error(`Ресурсы не найден, ${response.status}`);
            } else if (response.status === 500) {
                throw new Error("ошибка ответа сервера");
            } else {
                throw new Error (`ошибка HTTP:, ${response.status}`)
            }
        }

      const data = await response.json();
      console.log("данные получены:", data);
    } catch (error) {
        throw error;
    }
}


async function dataInit() {
    try {
        const dataTasks = await fetchData();
        console.log(dataTasks);
    } catch (error) {
        if(error.message === 'пользователь не авторизован (401)') {
            window.location.href = '/login';
        }
        console.error("ошибка не пришла:", error.message);
    }
}



