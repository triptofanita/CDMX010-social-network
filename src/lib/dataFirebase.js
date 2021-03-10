import { store } from './firebase.js';

// voy a ir anotando los pasos para el crud segun un tutorial para guar
// crear función para guardar los datos en una conección
// será una petición asincrona porque nos devolvera una respuesta
// usar promesa o sasync away
//

export const createPost = () => {
  const myPost = document.querySelector('.textPost').value;
  store.collection('post').add({
    note: myPost,
  })
    .then((docRef) => {
      // para que limpie el campo del textarea al enviar
      document.querySelector('.textPost').value = '';
      console.log('ID del documento: ', docRef.id);
    })
    .catch((error) => {
      console.error('no se creo documento: ', error);
    });
};

// función para leer la data
export const getData = () => {
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
};

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log('auth: signin');
//     db.collection('post')
//       .get()
//       .then((snapshot) => {
//         console.log(snapshot.docs);
//         setPost(snapshot.docs);
//       });
//   } else {
//     setPost([]);
//   }
// });

// // poner los datos en un div
// const demoPost = document.querySelector('.newPost');
// const setPost = (data) => {
//   if (data.length) {
//     let template = '';
//     data.forEach(doc => {
//       const post = doc.data();
//       console.log(post);
//       const container = `
//       <h3>${post.Title}</h3>
//       <p>${post.descripction}</p>
//       `;
//       template += container;
//     });
//     demoPost.innerHTML = template;
//   } else {
//     demoPost.innerHTML = `<p>accede para ver publicaciones</p>
//     `;
//   }
// };
