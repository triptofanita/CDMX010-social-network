import { onNavigate } from '../lib/routes.js';

export const timeline = `
<header> HOLA!!! </header>
  <h1>Hola, este es tu perfil o muro </h1>
<div class="Post">
  <input type="text" class="newPost"></input>
</div>
<nav class"menu">
<ul>
//
  <li><a class="buttonSingOut">cerrar sesión</a></li>
  <li><a href="" class="goProfile">Perfil</a></li>
</ul>
</nav>`;

// para cerrar sesión puede ser etiqueta a pero sin href porque manda a la misma pantalla
document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonSingOut')) {
    firebase.auth().signOut()
      .then(() => {
        alert('Sign-out successful');
        onNavigate('/');
      }).catch((error) => {
        alert(`An error happened , ${error}`);
      });
  } // si manda a la pantalla perfil
  if (e.target.matches('.goProfile')) {
    console.log('Dirige al perfil');
    onNavigate('/profile');
  }
});
