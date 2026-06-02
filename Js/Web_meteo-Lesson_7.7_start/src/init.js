import { switchTheme } from "./components/switchTheme.js";
import { getGeoData } from "./api/geoData.js";
import { getWeatherByForm } from "./components/inputForm.js";
import { renderCurrentTime } from "./helpers/currentTime.js";
import { geoLocation } from "./components/geoLocation.js";
import { scrollToTop } from "./components/scrollToTop.js";
import { getCurrentYear } from "./components/currentYear.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
  renderCurrentTime();
  geoLocation();
  scrollToTop();
  getCurrentYear();
}
