export function botonLimpiar() {
  const button = document.createElement("button");
  button.className = "botonLimpiar";
  button.textContent = "Limpiar";
  button.setAttribute("id", "botonLimpiar");

  return button;
}
