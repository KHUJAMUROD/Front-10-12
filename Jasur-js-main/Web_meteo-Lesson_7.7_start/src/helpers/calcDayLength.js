export function calcDayLength(sunrise, sunset) {
  const diffInSeconds = sunset - sunrise;
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);

  return `${hours} час ${minutes} мин`;
}
