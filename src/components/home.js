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
    <div class = "aboutTextHome">
      <p> Eco App es una comunidad de usuarios interesados en compartir iniciativas y experiencias vinculadas a la ecología y al desarrollo sostenible.
      ¡Únete a esta comunidad y empieza a compartir tus ideas y tips para salvar al planeta!</p>
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
