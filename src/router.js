let ROUTES = {};
let rootElement = '';

export const setRootEl = (newRoutesElementValue) => {
  // Asignación rootEl
  rootElement = newRoutesElementValue;
};

export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === 'object') {
    if (newRoutesValue['/error']) {
      ROUTES = newRoutesValue;
    }
  }
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
};

const queryStringToObject = (queryString) => {
  if (!queryString) return {};
  const searchParam = new URLSearchParams(queryString);
  const objet = Object.fromEntries(searchParam);
  return objet;
};

const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES['/error']());
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  //const URLvisited = window.location.origin + pathname;
  window.history.pushState(
    {},
    pathname,
    `${window.location.origin + pathname}${props ? `?${new URLSearchParams(props)}` : ''}`,
  );
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location = '/', props = {}) => {
  // parse the location for the pathname and search params
  const { pathname } = location;
  // convert the search params to an object
  const params = { ...props, ...queryStringToObject(window.location.search) };
  // render the view with the pathname and object
  renderView(pathname || location, params);
};
