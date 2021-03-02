// registro con email y contraseña
// crear nuevo usuario con email y contraseña
export const createNewUser = () => {
  const email = document.querySelector('#mailNewUser').value;
  const password = document.querySelector('#passwordNewUser').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(`Signed in, ${result}`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(`opss, ${errorMessage}`);
    });
};

// observador que nos diga sobre el email verificado
export const stateObserver = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const emailVerified = user.emailVerified;
      const textVerified = '';
      if (emailVerified === false) {
        document.querySelector('.errorAlert').innerHTML = `
        <p>tu correo no esta, ${user.emailVerified} </p>`;
      } else {
        document.querySelector('.errorAlert').innerHTML = `
        <p>tu correo esta, ${textVerified} </p>`;
      }
    } else {
      // template para que diga que esta incorrect
      alert('oops, algo malo pasó');
    }
  });
};

// autentificación con cuenta google
// export const googleSignIn = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithRedirect(provider)
//     .then((result) => {
//       if (result.credential) {
//         const credential = result.credential;
//         // // This gives you a Google Access Token. You can use it to access the Google API.
//         // const token = credential.accessToken;
//         // // ...
//         console.log(`estas dentro, ${credential}`);
//       }
//       // The signed-in user info.
//       const user = result.user;
//     }).catch((error) => {
//       const errorMessage = error.message;
//       console.log(`el email es, ${errorMessage}`);
//       // The email of the user's account used.
//       const email = error.email;
//       console.log(`el email es, ${email}`);
//       // ...
//     });
// };
