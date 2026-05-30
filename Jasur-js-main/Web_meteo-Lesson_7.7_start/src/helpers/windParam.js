export function updateWindDirection(windDeg) {
  const windIcon = document.getElementById("wind-direction-icon");
  const windText = document.getElementById("wind-direction-text");

  const iconRotation = (windDeg + 180) % 360;
  windIcon.style.transform = `rotate(${iconRotation}deg)`;

  const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
  const normalizedDegrees = (windDeg + 360) % 360;
  const index = Math.round(normalizedDegrees / 45) % 8;
  windText.textContent = directions[index] || "Н/Д";
}
