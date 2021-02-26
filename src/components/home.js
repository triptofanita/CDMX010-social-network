import { onNavigate } from '../lib/routes.js';

export const home = `
<header>
    <h1>ECO APP</h1>
    </header>
    <div class= "inicio">
    <div class= "containerImg">
    <img class="image" src="assets/img/imagendeportada.png"></img>
    </div>
    <div class="session">
    <button class="buttonLogin" id="login" href="#">Iniciar Sesión</button>
    <button class="buttonSignUp" id="signUp" href="#">Regístrate</button>
    </div>
    <div>
    <a class="moreInfo" href="#">Conócenos</a>
    </div>
    </div>
    `;

document.addEventListener('click', (e) => {
  if (e.target.matches('.moreInfo')) {
    console.log('Dirige a about');
    // about();
    e.preventDefault();
    onNavigate('/about');
  }
  if (e.target.matches('.buttonLogin')) {
    console.log('Dirige a Iniciar sesión');
    // logIn();
    onNavigate('/login');
  }
  if (e.target.matches('.buttonSignUp')) {
    console.log('Dirige a Regístrate');
    // signUp();
    onNavigate('/signUp');
  }
});
