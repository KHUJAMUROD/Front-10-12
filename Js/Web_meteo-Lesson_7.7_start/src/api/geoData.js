import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";
import { isCyrillic } from "../helpers/checkCyrillic.js";
import { replaceAbbreviation } from "../helpers/cityAbbreviation.js";
import { saveCityToLocalStorage } from "../helpers/saveCityToLocalStorage.js";
import { getWeather, getForecast } from "./getWeatherAndForecast.js";
import { renderCurrentWeather } from "../components/currentWeather.js";
import { renderHourlyForecast } from "../components/hourlyForecast.js";
import { renderDailyForecast } from "../components/dailyForecast.js";

export const getGeoData = async () => {
  let city = cityInput.value.trim();

  if (!city) {
    return;
  }
  if (!isCyrillic(city)) {
    showError("Проверьте название города");
    return;
  }

  city = replaceAbbreviation(city);

  try {
    const geoUrl = `${baseUrl}/geo/1.0/direct`;
    const queryParams = new URLSearchParams({
      q: city,
      limit: 1,
      appid: apiKey,
    });

    const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);

    const geoData = await geoResponse.json();

    if (!geoData.length) {
      throw new Error("Город не найден");
    }

    const { lat, lon } = geoData[0];

    saveCityToLocalStorage(city);

    const weatherData = await getWeather(lat, lon);
    const forecastData = await getForecast(lat, lon);

    renderCurrentWeather(weatherData, city);
    renderHourlyForecast(forecastData);
    renderDailyForecast(forecastData);
  } catch (error) {
    console.error(error.message);
    showError("Данные не получены");
  }
};
