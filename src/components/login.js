export const login = `
<div class ="logContainer">
        <div class ="logText">
            <h2>Inicia sesión en</h2>
            <h3>ECO APP</h3>
        </div>
        <div class="dataUser">
            <input type="text" id="mailUser" class="mailUser" placeholder="Escribe tu correo"> </input>
            <input type="password" id="passwordUser" class="passwordUser" placeholder="Contraseña"> </input>
        </div>
        <div class="buttonLogContainer">
            <button class="buttonLog" id="login" href="#">Iniciar Sesión</button>
        </div>
        <div class="forgottenPass">
            <a class="newPass" href="#">¿Olvidaste tu contraseña?</a>
        </div>
        </div>`;

document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonLog')) {
    console.log('usuario iniciando sesión');
    e.preventDefault();
    const email = document.querySelector('#mailUser').value;
    const password = document.querySelector('#passwordUser').value;
    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert('¡has ingresado correctamente!');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('oops! ocurrio en un error');
      });
  }
});
