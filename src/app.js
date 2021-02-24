// se rendericen en pantalla
import { routes } from './lib/routes.js';

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
};


//window.addEventListener('popstate', e => {
  //console.log('popstate', history.state);
//});
window.onpopstate = () => {
rootDiv.innerHTML = routes[window.location.pathname];
};

// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };
