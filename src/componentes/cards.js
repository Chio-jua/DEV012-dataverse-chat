/* eslint-disable  */
/* eslint-disable no-restricted-syntax */
import { navigateTo } from "../router.js";

export function renderItems(data, detalles=true) {
  const ul = document.createElement("ul");
  ul.className = "ulClass";
  let liCompilados = "";
  let datosTarjetas = "";
  let datosTarjetasA="";
  for (const element of data) {
    // elementos li
    const li = document.createElement("li");
    li.className = "liClass";
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "Artist");
    li.setAttribute("data-id", element.id);

    // ahora, cada elemento li tiene un elemento dl que contiene a la imagen, el dt y el dd. Primero hacer el elemento dl

    const dl = document.createElement("dl");
    dl.setAttribute("itemscope", "");
    dl.setAttribute("itemtype", "Artist");

    if(detalles===false){
      const tarjeta = document.createElement('div');
      tarjeta.className='tarjeta';

    datosTarjetasA = `
      <dt><strong>Nombre:</strong></dt><dd itemprop="name">${element.name}</dd>
      <img class="imag" src="${element.imageUrl}" alt="imagen"/>
      `;
      tarjeta.innerHTML=datosTarjetasA;
      ul.className='ulCG';
      ul.appendChild(tarjeta);
    }else{
    datosTarjetas = `
      <img class="imag" src="${element.imageUrl}" alt="imagen"/>
      <dt><strong>Nombre:</strong></dt><dd itemprop="name">${element.name}</dd>
      <dt><strong>Descripción:</strong></dt><dd itemprop="description">${element.shortDescription}</dd>
      <dt><strong>Género:</strong></dt><dd itemprop="genre">${element.facts.genre}</dd>
      <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${element.facts.albums}</dd>
      <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${element.facts.artist}</dd>
        `;
        dl.innerHTML = datosTarjetas;
        li.appendChild(dl);
        liCompilados = li;
    ul.appendChild(liCompilados);
    
      }
    //dl.innerHTML = datosTarjetas;

    

    //Evento de escucha en cada tarjeta para navegar a la vista del chat individual
    li.addEventListener("click", () => {
      const pathname = "/personaje";
      const props = {
        id:element.id
        /*name: element.name,
        shortDescription: element.shortDescription,
        imageUrl: element.imageUrl,
        genre: element.facts.genre,
        albums: element.facts.albums,
        artist: element.facts.artist, */
      };
      navigateTo('/personaje', {id:element.id});
    });
  }
  return ul;
}
