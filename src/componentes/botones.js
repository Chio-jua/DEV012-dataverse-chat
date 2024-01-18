import { navigateTo } from "../router.js";

export function botonApiKeyHome() {
  const button = document.createElement("button");
  button.textContent = "API Key";
  button.className = "botonApiKey";
  // Agregar un evento de clic al botón
  button.addEventListener("click", function () {
    navigateTo("/apikey");
  });
  return button;
}

export function botonEnviar() {
  const button = document.createElement("button");
  button.className = "botonEnviar";
  button.setAttribute("id", "botonEnviar");
  button.textContent = "Enviar";
  return button;
}

export function botonLimpiarApi() {
  const botonLimpiarApi = document.createElement("button");
  botonLimpiarApi.className = "botonLimpiarApi";
  botonLimpiarApi.setAttribute("id", "botonLimpiarApi");
  botonLimpiarApi.textContent = "Vuelve a introducir tu API Key";
  return botonLimpiarApi;
}