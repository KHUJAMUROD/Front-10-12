import { getGeoData } from "../api/geoData.js";
import { cityInput } from "./inputForm.js";

const recentCitiesList = document.getElementById("recent-cities-list");

document.addEventListener("click", (e) => {
  if (e.target !== cityInput && e.target !== recentCitiesList) {
    recentCitiesList.style.display = "none";
  }
});

export const showRecentCities = () => {
  const cities = JSON.parse(localStorage.getItem("recentCities")) || [];

  if (cities.length === 0) return;

  recentCitiesList.innerHTML = "";

  cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      cityInput.value = city;
      recentCitiesList.style.display = "none";
      getGeoData(city);
    });
    recentCitiesList.append(li);
  });

  recentCitiesList.style.display = "block";
};
