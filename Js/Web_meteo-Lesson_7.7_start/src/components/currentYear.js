export function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  yearElement.textContent = currentYear;
}
