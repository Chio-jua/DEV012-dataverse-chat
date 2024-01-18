export const estructuraFiltro = () => {
  const etiqueta = document.createElement("label");
  etiqueta.className = "filtroEst";
  etiqueta.textContent = "Selecciona un género: ";
  etiqueta.setAttribute("for", "genero");
  const filtro = document.createElement("select");
  filtro.setAttribute("data-testid", "select-filter");
  filtro.setAttribute("name", "genero");
  filtro.setAttribute("id", "genero");

  const opcion1 = document.createElement("option");
  opcion1.setAttribute("id", "opcionUno");
  opcion1.setAttribute("value", "opcionUno");
  opcion1.textContent = "Selecciona una opción";

  const opcion2 = document.createElement("option");
  opcion2.setAttribute("value", "Pop");
  opcion2.textContent = "Pop";

  const opcion3 = document.createElement("option");
  opcion3.setAttribute("value", "Rock");
  opcion3.textContent = "Rock";

  const opcion4 = document.createElement("option");
  opcion4.setAttribute("value", "Cumbia");
  opcion4.textContent = "Cumbia";

  filtro.appendChild(opcion1);
  filtro.appendChild(opcion2);
  filtro.appendChild(opcion3);
  filtro.appendChild(opcion4);

  etiqueta.appendChild(filtro);

  return etiqueta;
};
