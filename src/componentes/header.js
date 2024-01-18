export const header = () => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "M u s i c A r t";
  header.appendChild(h1);
  return header;
};
