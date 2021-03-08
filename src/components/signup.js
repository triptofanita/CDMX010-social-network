import { createNewUser } from '../lib/authFirebase.js';

export const signUp = `
<div class ="signUp">
        <div class ="signUpText">
          <h2>¡Regístrate!</h2>
          <h3>Es rápido y fácil</h3>
        </div>
        <div class="dataNewUser">
          <input type="text" id="nameNewUser" class="nameNewUser" placeholder="Nombre"> </input>
          <input type="text" id="mailNewUser" class="mailNewUser" placeholder="Correo"> </input>
          <input type="password" id="passwordNewUser" class="passwordNewUser" placeholder="Contraseña"></input>
          <div class ="errorAlert">
          </div>
          <button class="buttonSend" id="signUpSend">enviar</button>
          </div>
        <div class="buttonContainer">
          <!-- <button class="buttonFacebook" id="signUpFacebook">Continuar con Facebook</button> -->
          <button class="buttonGoogle" id="signUpGoogle">Continuar con Google</button>
        </div>
      </div>
      `;

document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonSend')) {
    console.log('se esta registrando nuevo usuario');
    e.preventDefault();
    createNewUser();
  }
});
