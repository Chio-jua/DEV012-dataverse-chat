import { chat, formularioEnviar } from '../componentes/formulario.js';
import { botonEnviar } from '../componentes/botones.js';
import { header } from '../componentes/header.js';
import { pieDePagina } from '../componentes/footer.js';
import { iconHome } from '../componentes/iconos.js';
import { navigateTo } from '../router.js';
import { getCompletion } from '../lib/API.js';
import data from '../data/dataset.js';
import { renderItems } from '../componentes/cards.js';

export function chatgeneral() {
  const d = document;
  const chatView = d.createElement('div');
  const iconoChatGeneral = d.createElement('div');
  iconoChatGeneral.className = 'IconoApi';
  iconoChatGeneral.appendChild(iconHome());
  chatView.appendChild(iconoChatGeneral);
  chatView.appendChild(header());
  const otraCaja = d.createElement('div');
  otraCaja.className = "otraCaja";
  const cajaPrincipal = d.createElement('div');
  cajaPrincipal.className = 'cajaPrincipalChatG';
  const divFormulario = d.createElement('div');
  divFormulario.appendChild(chat());
  divFormulario.appendChild(formularioEnviar());
  const botones = d.createElement('div');
  botones.className = 'botonesP';
  botones.appendChild(botonEnviar());
  divFormulario.appendChild(botones);
  cajaPrincipal.appendChild(divFormulario);

  // const artistas = d.createElement('div');
  // artistas.className = "artistasCG";
  // artistas.appendChild();
  otraCaja.appendChild(renderItems(data, false));
  otraCaja.appendChild(cajaPrincipal);
  chatView.appendChild(otraCaja);
  chatView.appendChild(pieDePagina());

  const textArea = chatView.querySelector('#textArea');
  const buttonEnviar = chatView.querySelector('#botonEnviar');
  const cajaChat = chatView.querySelector('#chat');
  buttonEnviar.addEventListener('click', () => {
    if (textArea.value === '') {
      alert('Escribe un mensaje antes de enviar');
      return;
    }
    const Mensaje = d.createElement('div');
    Mensaje.className = 'mensaje';
    Mensaje.textContent = textArea.value;
    cajaChat.insertAdjacentElement('beforeend', Mensaje);
    textArea.value = '';

    const clave = localStorage.getItem('chatGptApiKey');
    if (!clave) {
      navigateTo('/apikey');
      return;
    }
    const errorApi = d.createElement('button');
    errorApi.className = 'errorApi';
    errorApi.textContent = 'La API Key es incorrecta, da click aquí para volver a introducirla';
    errorApi.addEventListener('click', () => {
      navigateTo('/apikey');
    });

    for (const element of data) {

      getCompletion(textArea.value, element.name)
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
          if (error) {
            
          }
          botones.appendChild(errorApi);
        });
    }
  });//click

  return chatView;
}
