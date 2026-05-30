const dailyForecast = document.querySelector(".forecast-list");
import { showError } from "./error.js";

export const renderDailyForecast = (data) => {
  dailyForecast.innerHTML = "";

  if (!data) {
    showError("Данные о погоде недоступны");
  }

  const groupedData = groupDataByDay(data.list);

  Object.keys(groupedData)
    .slice(0, 5)
    .forEach((dayKey) => {
      const dayData = groupedData[dayKey];
      const maxTemp = Math.round(
        Math.max(...dayData.map((item) => item.main.temp_max)),
      );

      const minTemp = Math.round(
        Math.min(...dayData.map((item) => item.main.temp_min)),
      );

      const icon = dayData[0].weather[0].icon;

      const date = new Date(dayData[0].dt * 1000);

      const dayName = date.toLocaleDateString("ru-RU", {
        weekday: "short",
      });

      const dayNumber = date.getDate();

      const monthName = date.toLocaleDateString("ru-RU", {
        month: "short",
      });

      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");
      forecastItem.innerHTML = `
        <p class="day">${dayName},</p>
        <p class="day">${dayNumber} ${monthName}</p>
        <img
        src="https://openweathermap.org/img/wn/${icon}@4x.png"
        alt="Погода"
        />
        <div class="temp">
        <p class="temp-day">${maxTemp} °C</p>
        <p class="temp-night">${minTemp} °C</p>
        `;

      dailyForecast.append(forecastItem);
    });
};

const groupDataByDay = (list) => {
  const groupedData = {};

  list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toLocaleDateString("ru-RU");

    if (!groupedData[dayKey]) {
      groupedData[dayKey] = [];
    }

    groupedData[dayKey].push(item);
  });

  return groupedData;
};
