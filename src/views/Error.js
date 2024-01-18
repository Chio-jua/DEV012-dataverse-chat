export function Error() {
  const error = document.createElement('div');
  error.className = "contenedorImagen"
  const imagen = document.createElement('img');
  imagen.className = "imagenError";
  imagen.src = "componentes/error.jpg";
  error.appendChild(imagen);

  return error;
}
