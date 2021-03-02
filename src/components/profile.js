// import { onNavigate } from '../lib/routes.js';

export const profile = `
<h1>Hola, este es tu perfil o muro </h1>
<p>podras mirar lo que solo tu escribes</p>
<p>para cerrar sesión desde aquí</p>
<button class="close">cerrar sesión</button>
`;
// si cierra botón
// para cerrar sesión
document.addEventListener('click', (e) => {
  if (e.target.matches('.close')) {
    firebase.auth().signOut()
      .then(() => {
        alert('Sign-out successful');
        onNavigate('/');
      }).catch((error) => {
        alert(`An error happened , ${error}`);
      });
  }
});
