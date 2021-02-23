// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
import { onNavigate } from './app.js';
// import { home } from './components/home.js';
import { about } from './components/about.js';

const buttonAbout = document.querySelector('.moreInfo');
buttonAbout.addEventListener('click', () => {
  const infoAbout = onNavigate('/about');
});

// const containerHome = document.getElementById('root');
// let emptyHome = '';
// emptyHome += onNavigate(home);
// containerHome.innerHTML = emptyHome;
