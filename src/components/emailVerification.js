import { onNavigate } from '../lib/routes.js';

import { userValidation } from '../lib/authFirebase.js';

export const emailVerification = `
  <div class= "verification">
  <p>Tu correo aun no está validado, verifica tu correo o pica aquí para enviarte para validar continuar</p>
    <div class = "sendVerification">
    <button class= "emailVerified">Enviar email de Verificación</button>
    </div>
    <p>¿ya tienes una cuenta verificada? mira aquí</p>
    <a class="goLogin" href="">Loguin</a>
  </div>
`;
document.addEventListener('click', (e) => {
  if (e.target.matches('.emailVerified')) {
    userValidation();
  }
  if (e.target.matches('.goLogin')) {
    console.log('Dirige al Login');
    onNavigate('/login');
  }
});
