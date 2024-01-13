import { header } from "../componentes/header.js";
import { pieDePagina } from "../componentes/footer.js";
import { formularioEnviar } from "../componentes/formulario.js";
import { iconHome } from "../componentes/iconos.js";
import { botonChatGeneral } from "../componentes/bchatGrupal.js";
import { botonChatIndividual } from "../componentes/bchatGrupal.js";
import { navigateTo } from "../router.js";

//la función de fetch s etiene que generar dentro de lib, pasar ahí tamibén el data set y el data functions
export function contenedorAPI() {
   const contenedorAPI = document.createElement("div");
  contenedorAPI.className = "apiKey";

  const contenedorIconoApi = document.createElement('div');
  contenedorIconoApi.className = "IconoApi";
  contenedorIconoApi.appendChild(iconHome());
contenedorAPI.appendChild(contenedorIconoApi);

  
  contenedorAPI.appendChild(header());
  const apiTitulo = document.createElement('h1');
  apiTitulo.textContent='API Key';
  apiTitulo.className='apiTitulo';
  contenedorAPI.appendChild(apiTitulo);

  
  contenedorAPI.appendChild(formularioEnviar());
  const botonesChats = document.createElement('div');
  botonesChats.className = "botonesChats";
  botonesChats.appendChild(botonChatGeneral());
  botonesChats.appendChild(botonChatIndividual());
 
  contenedorAPI.appendChild(botonesChats);
  
  contenedorAPI.appendChild(pieDePagina());

  //Funcionalidad botonesChats
  const bChatGeneral = contenedorAPI.querySelector('.botonChatGeneral');
  bChatGeneral.addEventListener("click", () => {
navigateTo("/chatgeneral");
  });

  const bChatIndividual = contenedorAPI.querySelector('.botonChatIndividual');
  bChatIndividual.addEventListener("click", () => {
navigateTo("/");
  });

  const botonEnviar = contenedorAPI.querySelector("#botonEnviar");
  const apiKey = contenedorAPI.querySelector("#textArea");
    botonEnviar.addEventListener("click", () => {
      console.log(apiKey.value);
        localStorage.setItem("chatGptApiKey", apiKey.value);
        //window.location.href = "/personaje";
    alert("Tu Api se ha guardado, dirígete al Chat que desees");
    });
  return contenedorAPI;
}
