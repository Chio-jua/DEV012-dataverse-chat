export function chat() {
  const chat = document.createElement("div");
  chat.className = "chat";
  chat.setAttribute("id", "chat");
  return chat;
}

export function formularioEnviar() {
  const textArea = document.createElement("textarea");
  textArea.placeholder = "Escribe aquí...";
  textArea.className = "textArea";
  textArea.setAttribute("id", "textArea");
  return textArea;
}
