import { onNavigate } from '../lib/routes.js';
export const profile = `
<h1>Hola, este es tu perfil o muro </h1>
<p>para cerrar sesión</p>
<button class="buttonSingOut">Cerrar sesión</button>
`;

// para cerrar sesión
document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonSingOut')) {
    firebase.auth().signOut()
      .then(() => {
        alert('Sign-out successful');
        onNavigate('/');
      }).catch((error) => {
        alert(`An error happened , ${error}`);
      });
  }
});
