import { navigateTo } from "../router.js";
export function iconHome() {
  const d = document;
  const iHome = d.createElement("div");
  const a = d.createElement("a");
  a.href = "/";
  a.className = "iconHome";
  const i = d.createElement("i");
  i.className = "fa-solid fa-house-chimney";
  a.appendChild(i);
  iHome.appendChild(a);
  return iHome;
}

export function iconChat() {
  const d = document;
  const iChat = d.createElement("div");
  const a = d.createElement("a");
  
  a.className = "iconChat";
  const i = d.createElement("i");
  i.className = "fa-solid fa-message";
  a.appendChild(i);
  iChat.appendChild(a);
  a.addEventListener("click", () => {
    navigateTo("/chatgeneral");
  });
  return iChat;
}
