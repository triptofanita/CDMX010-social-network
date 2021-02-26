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

// registro con email y contraseña
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

// registro con cuenta google en pop Up
document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonGoogle')) {
    console.log('Registro con Google');
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    // registro con cuenta google
    firebase.auth().signInWithPopup(provider).then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      // ..
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(credential);
      // ...
      alert('oops! intentalo de nuevo');
    });
  }
});

// document.addEventListener('click', (e) => {
//   if (e.target.matches('buttonGoogle')) {
//     console.log('registrado con Google');
//     e.preventDefault();

//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithRedirect(provider);
//     firebase.auth()
//     .getRedirectResult()
//     .then((result) => {
//       if (result.credential) {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // ...
//       }
//       // The signed-in user info.
//       var user = result.user;
//     }).catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//   });
//   }
// });
