const errorMessage = document.getElementById("error-message");

export function showError(message) {
  errorMessage.textContent = message;
}
