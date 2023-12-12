import { PruebaHome } from '../views/Home.js';
import { renderItems } from './cards.js';

export const estructuraOrdemaniento = () => {
    const etiqueta = document.createElement("label");
    etiqueta.textContent = "Ordenar:";
    etiqueta.setAttribute("for", "ordenado");
    const orden = document.createElement("select");
    orden.setAttribute("data-testid", "select-sort");
    orden.setAttribute("name", "sort-order");
    orden.setAttribute("id", "ordenado");
  
    const opcion1 = document.createElement("option");
    opcion1.setAttribute("value", "blanco2");
    opcion1.textContent = "Selecciona una opción";
  
    const opcion2 = document.createElement("option");
    opcion2.setAttribute("value", "asc");
    opcion2.textContent = "A - Z";
  
    const opcion3 = document.createElement("option");
    opcion3.setAttribute("value", "desc");
    opcion3.textContent = "Z - A";
  
    orden.appendChild(opcion1);
    orden.appendChild(opcion2);
    orden.appendChild(opcion3);
  
    etiqueta.appendChild(orden);

return etiqueta;
}