  const axios = require("axios");




// SCRIPT 1 //

// fetch("https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Ошибка ответа сервера");
//         } else {
//             console.log(response);
//         }
//         return response.json();
//     })
//     .then((data) => console.log("Данные получены:", data))
//     .catch((error) => console.error("Ошибка:", error));


// axios
//     .get("https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos")
//     .then((response) => console.log("response", response.data))
//     .catch((error) => console.error("error", error));


// SCRIPT 2 //



// fetch("https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     createdAt: new Date().getTime(),
//     text: "text 777",
//     completed: false,
//     order: 777,
//   }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Ошибка ответа сервера");
//     } else {
//       console.log(response);
//     }
//     return response.json();
//   })
//   .then((data) => console.log("Данные получены:", data))
//   .catch((error) => console.error("Ошибка:", error));


// axios
//   .post(
//     "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos",
//     {
//       createdAt: new Date().getTime(),
//       text: "text 777",
//       completed: false,
//       order: 777,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//   .then((response) => {
//     console.log("Данные получены:", response.data);
//   })
//   .catch((error) => console.error("Ошибка:", error));


// axios({
//   method: "put",
//   url: "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos/2",
//   data: {
//     createdAt: new Date().getTime(),
//     order: 999,
//   },
// })
//   .then((response) => {
//     console.log("Данные получены:", response.data);
//   })
//   .catch((error) => console.error("Ошибка:", error));


// SCRIPT 3 //


// axios
//   .get("https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos", {
//     params: {
//       id: 3,
//     },
//   })
//   .then((response) => console.log("response", response.data))
//   .catch((error) => console.error("error", error));


// axios
//   .get("https://jsonplaceholder.typicode.com/comments", {
//     params: {
//       postId: 1,
//     },
//   })
//   .then((response) => console.log("response", response.data))
//   .catch((error) => console.error("error", error));


// axios({
//   method: "post",
//   url: "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos",
//   data: {
//     createdAt: new Date().getTime(),
//     text: "text 777",
//     completed: false,
//     order: 777,
//   },
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     console.log("Данные получены:", response.data);
//   })

//   .catch(function (error) {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log(error.request);
//     } else {
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

// async function sendRequest() {
//   try {
//     const response = await axios.post(
//       "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos",
//       {
//         createdAt: new Date().getTime(),
//         text: "text 777",
//         completed: false,
//         order: 777,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Данные получены:", response.data);
//   } catch (error) {
//     console.error("Ошибка:", error);
//   }
// }

// sendRequest();


// SCRIPT 4 //


// const axiosInstance = axios.create({
//   baseURL: "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos",
//   headers: {
//     "Content-Type": "application/json", 
//   },
// });

// function addTodo() {
//   return axiosInstance({
//     method: "post",
//     data: {
//       createdAt: new Date().getTime(),
//       text: "text 111",
//       completed: false,
//       order: 111,
//     },
//   })
//     .then((response) => console.log("Данные получены:", response.data))
//     .catch((error) => console.error("Ошибка:", error));
// }

// addTodo();


// axios.defaults.baseURL = "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1";
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// axios({
//   method: "post",
//   url: "/todos", 
//   data: {
//     createdAt: new Date().getTime(),
//     text: "text 777",
//     completed: false,
//     order: 777,
//   },
// })
//   .then((response) => {
//     console.log("Данные получены:", response.data);
//   })
//   .catch((error) => console.error("Ошибка:", error));


// SCRIPT 5 //



// const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//   (config) => {
   
//     if (!config.params) {
//       config.params = {};
//     }
//     config.params["appid"] = "d09dbf752c291c5d8b9325227db05277"; 
//     console.log("Запрос отправлен:", config);
//     return config;
//   },
//   (error) => {
   
//     return Promise.reject(error);
//   }
// );


// axiosInstance.interceptors.response.use(
//   (response) => {
   
//     console.log("Ответ получен:", response);
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );


// axiosInstance({
//   url: "https://api.openweathermap.org/data/2.5/weather",
//   params: {
//     lat: 45,
//     lon: 40,
//     lang: "ru",
//     units: "metric",
//   },
// })
//   .then((response) => {
//     console.log("Данные получены:", response.data);
//   })
//   .catch((error) => {
//     console.log("ошибка перехвачена", error);
//   });


// SCRIPT 7 //

// Отмена запроса

// const axiosInstance = axios.create();


// let abortController; 
// function fetchWeatherData(lat, lon) {

//   if (abortController) {
//     abortController.abort(); 
//     console.log("Предыдущий запрос отменен.");
//   }

 
//   abortController = new AbortController();

//   axiosInstance({
//     url: "https://api.openweathermap.org/data/2.5/weather",
//     params: {
//       lat: lat,
//       lon: lon,
//       lang: "ru",
//       units: "metric",
//       appid: "d09dbf752c291c5d8b9325227db05277", 
//     },
//     signal: abortController.signal,
//   })
//     .then((response) => {
//       console.log("Данные получены:", response.data);
//     })
//     .catch((error) => {
//       if (axios.isCancel(error)) {
//         console.log("Запрос отменен:", error.message);
//       } else if (error.name === "AbortError") {
//         console.log("Запрос был отменен с помощью AbortController.");
//       } else {
//         console.log("Ошибка:", error);
//       }
//     });
// }

// fetchWeatherData(45, 40);

// setTimeout(() => {
//   fetchWeatherData(46, 41);
// }, 100);