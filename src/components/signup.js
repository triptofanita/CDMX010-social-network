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
          <button class="buttonSend" id="signUpSend">enviar</button>
          </div>
        <div class="buttonContainer">
          <button class="buttonFacebook" id="signUpFacebook">Continuar con Facebook</button>
          <button class="buttonGoogle" id="signUpGoogle">Continuar con Google</button>
        </div>
      </div>
      `;

document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonSend')) {
    console.log('registrando usuario');
    e.preventDefault();
    const email = document.querySelector('#mailNewUser').value;
    const password = document.querySelector('#passwordNewUser').value;
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert('¡estas registrado!');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('oops! intentalo de nuevo');
      });
  }
});
