import { getGeoData } from "../api/geoData.js";
import { showRecentCities } from "./showRecentCities.js";

const searchForm = document.querySelector(".search-form");
export const cityInput = document.querySelector(".city-input");

export function getWeatherByForm() {
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    getGeoData(cityInput);
  });

  cityInput.addEventListener("focus", () => {
    showRecentCities();
  });
}
