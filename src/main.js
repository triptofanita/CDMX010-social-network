// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
import { onNavigate } from './app.js';
import { home } from './components/home.js';
import { about } from './components/about.js';
import { signUp } from './components/signup.js';


//evento para conócenos
const buttonAbout = document.querySelector('.moreInfo');
buttonAbout.addEventListener('click', () => {
  const infoAbout = onNavigate('/about');
});

// evento para botón registrate
const buttonSignUp = document.querySelector('.buttonSignUp');
buttonSignUp.addEventListener('click', () => {
  const infoUser = onNavigate('/signUp');
});


// //evento para botón regresar a home
// const buttonBack = document.querySelector('.back');
// buttonBack.addEventListener('click', () => {
//   window.history.back();
// });
