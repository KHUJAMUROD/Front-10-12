import { updateWindDirection } from "../helpers/windParam.js";
import { updateHumidityScale } from "../helpers/humidityParam.js";
import { formatTime } from "../helpers/formatTime.js";
import { calcDayLength } from "../helpers/calcDayLength.js";
import { updateSunPosition } from "../helpers/calcSunPosition.js";
import { calcSunPosition } from "../helpers/calcSunPosition.js";

const currentCity = document.querySelector(".city");
const currentTemp = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels");
const currentDescription = document.querySelector(".description");
const currentWeatherIcon = document.querySelector(".weather-icon img");
const currentWind = document.querySelector(".wind");
const currentVisibility = document.querySelector(".visibility");
const currentHumidity = document.querySelector(".humidity");
const currentPressure = document.querySelector(".pressure");
const sunriseItem = document.querySelector(".sunrise");
const sunsetItem = document.querySelector(".sunset");
const dayLength = document.querySelector(".day-length");

export const renderCurrentWeather = (data, city) => {
  currentCity.textContent = city || "Неизвестно";
  currentTemp.textContent = `${Math.round(data.main?.temp || 0)} °C`;
  feelsLike.textContent = `Ощущается как ${Math.round(data.main?.feels_like || 0)}°C`;
  currentDescription.textContent =
    data.weather?.[0]?.description || "Неизвестно";
  currentWeatherIcon.src = `https://openweathermap.org/img/wn/${
    data.weather?.[0]?.icon || "01d"
  }@2x.png`;
  currentWind.textContent = `${Math.round(data.wind?.speed || 0)} м/с`;
  const visibility = data.visibility || 0;
  if (visibility > 1000) {
    currentVisibility.textContent = `${(visibility / 1000).toFixed(1)} км`;
  } else {
    currentVisibility.textContent = `${visibility} м`;
  }
  currentHumidity.textContent = `${data.main?.humidity || 0}%`;
  currentPressure.textContent = `${Math.round(
    (data.main?.pressure || 0) * 0.750062,
  )} мм рт.ст.`;

  const windDegrees = data.wind?.deg || 0;
  updateWindDirection(windDegrees);

  const humidity = data.main?.humidity || 0;
  updateHumidityScale(humidity);

  const { sunrise, sunset } = data.sys || {};

  const { timezone } = data || {};

  sunriseItem.textContent = sunrise
    ? formatTime(sunrise, timezone)
    : "Неизвестно";
  sunsetItem.textContent = sunset ? formatTime(sunset, timezone) : "Неизвестно";

  dayLength.textContent = `Долгота дня: ${
    sunrise && sunset ? calcDayLength(sunrise, sunset) : "Неизвестно"
  }`;

  const sunPosition = sunrise && sunset ? calcSunPosition(sunrise, sunset) : 0;
  updateSunPosition(sunPosition);
};
