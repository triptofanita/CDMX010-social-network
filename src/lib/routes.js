import { home } from '../components/home.js';
import { about } from '../components/about.js';
import { signUp } from '../components/signup.js';
import { login } from '../components/login.js';
import { timeline } from '../components/timeline.js';
import { profile } from '../components/profile.js';
import { groups } from '../components/groups.js';

export const routes = {
  '/': home,
  '/about': about,
  '/signUp': signUp,
  '/login': login,
  '/timeline': timeline,
  '/profile': profile,
  '/groups': groups,
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
