import { home } from '../components/home.js';
import { about } from '../components/about.js';
import { signUp } from '../components/signup.js';
import { login } from '../components/login.js';

export const routes = {
  '/': home,
  '/about': about,
  '/signUp': signUp,
  '/login': login,
};

export const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.addEventListener('DOMContentLoaded', () => {
  routes;
});
