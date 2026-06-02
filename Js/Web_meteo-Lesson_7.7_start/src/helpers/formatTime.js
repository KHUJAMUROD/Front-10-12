export function formatTime(unixTime, timezone) {
  const localTime = unixTime + timezone;

  const date = new Date(localTime * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}
