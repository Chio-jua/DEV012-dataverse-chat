export function formularioApiKey() {
  const contPassword = document.createElement("div");
  contPassword.className="cajaPassword";

  // Contraseña
  const passwordInput = document.createElement('input');
  passwordInput.type = "password";
  passwordInput.setAttribute("id", "password");

  // Checkbox para mostrar/ocultar contraseña
  const showPasswordCheckbox = document.createElement('input');
  showPasswordCheckbox.type = "checkbox";
  showPasswordCheckbox.addEventListener('change', function() {
    passwordInput.type = this.checked ? "text" : "password";
  });

  // Etiqueta para el checkbox
  const showPasswordLabel = document.createElement('label');
  showPasswordLabel.textContent = "Mostrar Api Key";
  showPasswordLabel.appendChild(showPasswordCheckbox);

  // Botón
  const button = document.createElement("button");
  button.className = "botonEnviar";
  button.setAttribute("id", "botonEnviar");
  button.textContent = "Enviar";

  // Agregar elementos al contenedor

  contPassword.appendChild(passwordInput);
  contPassword.appendChild(showPasswordLabel);
  contPassword.appendChild(button);

  return contPassword;
}