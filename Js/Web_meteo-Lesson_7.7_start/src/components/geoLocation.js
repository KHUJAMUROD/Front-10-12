import { apiKey, baseUrl } from "../api/apiKeyAndHost.js";
import { showError } from "./error.js";
import { getWeather, getForecast } from "../api/getWeatherAndForecast.js";
import { renderCurrentWeather } from "./currentWeather.js";
import { renderHourlyForecast } from "./hourlyForecast.js";
import { renderDailyForecast } from "./dailyForecast.js";

export function geoLocation() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const { latitude, longitude } = await getBrowserGeolocation();
      const locationName = await geoLocationName(latitude, longitude);
      await fetchWeatherByCoords(latitude, longitude, locationName);
    } catch (error) {
      console.error("Ошибка при получении геолокации: ", error.message);
      showError(
        "Не удалось определить Ваше местоположение. Пожалуйста, введите город вручную",
      );
    }
  });
}

const getBrowserGeolocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Геолокация не поддерживается Вашим браузером"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
};

const geoLocationName = async (latitude, longitude) => {
  const reverseGeocodingUrl = new URL(`${baseUrl}/geo/1.0/reverse`);

  const queryParams = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    limit: 1,
    appid: apiKey,
  });

  const url = `${reverseGeocodingUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      // eslint-disable-next-line camelcase
      const { local_names } = data[0];
      // eslint-disable-next-line camelcase
      const russianName = local_names?.ru || data[0].name;
      return `${russianName}`;
    } else {
      throw new Error("Название места не найдено");
    }
  } catch (error) {
    console.error("Ошибка при получении названия места: ", error.message);
    showError("Ошибка при получении названия места");
  }
};

const fetchWeatherByCoords = async (latitude, longitude, locationName) => {
  try {
    const weatherData = await getWeather(latitude, longitude);
    const forecastData = await getForecast(latitude, longitude);

    renderCurrentWeather(weatherData, locationName);
    renderHourlyForecast(forecastData);
    renderDailyForecast(forecastData);
  } catch (error) {
    console.error(error.message);
    showError(
      "Не удалось получить данные о погоде. Пожалуйста, попробуйте позже",
    );
  }
};
