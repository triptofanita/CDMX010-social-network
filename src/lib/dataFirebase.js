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
/*export const getData = () => {
  const renderData = document.querySelector('#oldPost');
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        renderData.innerHTML += `
          <p>${doc.data().note}</p>
        `
      });
    });
};*/

export const getData = () => {
  const renderData = document.querySelector('#allPost');
  store.collection('post').onSnapshot((querySnapshot) => {
    console.log(querySnapshot)
    renderData.innerHTML='';
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      renderData.innerHTML += `
      <div class= "postCard">
        <div class ="textContainer">
          <p id=${doc.id}>${doc.data().note}</p>
        </div>
        <div class="oldPostMenu">
          <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
          <p>09</p>
          <a class="editText" id=""> Editar </button>
          <a class="deleteText" id=""> Eliminar</button>
        </div>
      </div>
        `
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
