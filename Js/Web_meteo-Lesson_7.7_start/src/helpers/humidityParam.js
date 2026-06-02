export const updateHumidityScale = (humidity) => {
  const parameter = document.querySelector(".parameter");

  parameter.style.width = `${humidity}%`;
};
