
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
import { chat, formularioEnviar } from '../componentes/formulario.js';
import { botonEnviar, botonLimpiarApi } from '../componentes/botones.js';
import { iconHome, iconChat } from '../componentes/iconos.js';

import { getCompletion } from '../lib/API.js';
import { navigateTo } from '../router.js';
//import { botonLimpiar } from '../componentes/botonlimpiar.js';
import data from '../data/dataset.js';

export function Personaje(props) {
  // Accedemos a las propiedades
  const d = document;
  const contPer = d.createElement('div');
  contPer.className = 'contPer';
  const iconoChatIndividual = document.createElement('div');
  iconoChatIndividual.className = 'iconosChatIndividual';
  iconoChatIndividual.appendChild(iconHome());
  iconoChatIndividual.appendChild(iconChat());
  contPer.appendChild(iconoChatIndividual);
  contPer.appendChild(header());

  // CONTENEDOR para almacenar el formulario y el los datos del personaje
  const chatPersonaje = d.createElement('section');
  chatPersonaje.className = 'chatPersonaje';
  const { id } = props;
  const artist = data.find((element) => element.id === id);

  // Renderizamos nuevamente la información detallada
  const detailElement = d.createElement('div');
  detailElement.innerHTML = `<li class="li" itemscope itemtype="Artist">
    <h2>${artist.name}</h2>
    <img class="imag" src="${artist.imageUrl}" alt="imagen"/>
    <dt><strong>Descripción:</strong></dt><dd itemprop="description">${artist.shortDescription}</dd>
    <dt><strong>Género:</strong></dt><dd itemprop="genre">${artist.facts.genre}</dd>
      <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${artist.facts.albums}</dd>
      <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${artist.facts.artist}</dd>
  </li>
      `;

  const contDetails = d.createElement('div');
  contDetails.className = 'contDetails';
  contDetails.appendChild(detailElement);
  chatPersonaje.appendChild(contDetails);
  const contChat = d.createElement('section');
  contChat.appendChild(chat());
  contChat.className = 'contChat';
  contChat.appendChild(formularioEnviar());
  const botones = d.createElement('div');
  botones.className = 'botonesP';
  
  const piePersonaje = document.createElement('div');
  piePersonaje.className = 'pieChatIndividual';
  piePersonaje.appendChild(pieDePagina());
  


  botones.appendChild(botonEnviar());
  botones.appendChild(botonLimpiarApi());
  contChat.appendChild(botones);
  chatPersonaje.appendChild(contChat);
  contPer.appendChild(chatPersonaje);
  contPer.appendChild(piePersonaje);
    // Funcionalidad botonLimpiarApi
    const botonLimpiar = contPer.querySelector('#botonLimpiarApi');
    botonLimpiar.addEventListener('click', () => {
      localStorage.removeItem('chatGptApiKey');
      navigateTo('/apikey');
    });
    
  // funcionalidad para enviar el mensaje escrito en el text área a la zona de chat
  const textArea = contPer.querySelector('#textArea');
  const buttonEnviar = contPer.querySelector('#botonEnviar');
  const cajaChat = contPer.querySelector('#chat');
  buttonEnviar.addEventListener('click', () => {
    if (textArea.value === '') {
      alert('Escribe un mensaje antes de enviar');
      return;
    }
    const Mensaje = d.createElement('div');
    Mensaje.className = 'mensaje';
    Mensaje.textContent = textArea.value;
    cajaChat.appendChild(Mensaje);

    const clave = localStorage.getItem('chatGptApiKey');
    if (clave) {
      getCompletion(textArea.value, artist.name)
        .then((respuesta) => respuesta.json())
        .then((respuestaArtista) => {
          const response = respuestaArtista.choices[0].message.content;
          textArea.value = '';
          const mensajeArtista = d.createElement('div');
          mensajeArtista.className = 'mensajeArtista';
          mensajeArtista.innerHTML = response;
          cajaChat.appendChild(mensajeArtista);
        })
        .catch((error) => {
          alert('Error: la Api Key que ingresaste es incorrecta', error);
        });
    } else {
      navigateTo('/apikey');
    }
  });
  return contPer;
}
