import { Home } from './views/Home.js';
import { Personaje } from './views/Personaje.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Error } from './views/Error.js';
import { contenedorAPI } from './views/Apikey.js';
import { chatgeneral } from './views/Chatgeneral.js';

// Rutas
const routes = {
  '/': Home,
  '/error': Error,
  '/personaje': Personaje,
  '/apikey': contenedorAPI,
  '/chatgeneral': chatgeneral,
};

const viewContainer = document.getElementById('root');

// Asignación de rutas
setRoutes(routes);

setRootEl(viewContainer);

// Elemento root donde las vistas se van a renderizar
document.addEventListener('DOMContentLoaded', () => {
  onURLChange(window.location.pathname);
});
window.addEventListener('popstate', function (event) {
  onURLChange(this.document.location, event.state);
});
