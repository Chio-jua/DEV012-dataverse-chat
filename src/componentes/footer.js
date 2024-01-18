export const pieDePagina = () => {
  const footer = document.createElement("footer");
  const contenedorDeMensaje = document.createElement("div");
  contenedorDeMensaje.textContent =
    "Elaborado por Miriam Felipe y Rocío Juárez";
  footer.appendChild(contenedorDeMensaje);
  return footer;
};
