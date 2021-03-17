// import { store } from './firebase.js';

// export const savePost = () => {
//   const myPost = document.querySelector('.textPost').value;
//   store.collection('post').add({
//     note: myPost,

//   })
//     .then((docRef) => {
//       // para que limpie el campo del textarea al enviar
//       document.querySelector('.textPost').value = '';
//       console.log('ID del documento: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('no se creo documento: ', error);
//     });
// };

// función para leer la data
// export const getDataOne = () => {
//   const renderData = document.querySelector('#allPost');
//   store.collection('post').get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//         renderData.innerHTML += `
//       <div class= "postCard">
//         <div class ="textContainer">
//           <p id=${doc.id}>${doc.data().note}</p>
//         </div>
//         <div class="oldPostMenu">
//           <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
//           <p>09</p>
//           <a class="editText" id=""> Editar </button>
//           <button class="deleteText" id=${doc.id} ${doc.data().note}> Eliminar</button>
//         </div>
//       </div>`;
//       });
//     });
// };

// Dar like
// export function likeCounter() {
//   const db = firebase.firestore();
//   const increment = firebase.firestore.FieldValue.increment(1);
//   // const decrement = firebase.firestore.FieldValue.increment(-1);
//   const statsRef = db.collection('post').doc('id');
//   const batch = db.batch();
//   batch.set(statsRef, { likeCount: increment }, { merge: true });
//   batch.commit();
// }

// export const getLikes = (id) => {
//   const renderLike = document.querySelector('.likeImg');
//   store.collection('post').get(id)
//     .then((querySnapshot) => {
//       const db = firebase.firestore();
//       const increment = firebase.firestore.FieldValue.increment(1);
//       // const decrement = firebase.firestore.FieldValue.increment(-1);
//       const statsRef = db.collection('post').doc('id');
//       const batch = db.batch();
//       batch.set(statsRef, { likeCount: increment }, { merge: true });
//       batch.commit();
//       querySnapshot.forEach((likeCount) => {
//         renderLike.innerHTML += `.inputImg${likeCount.value}`;
//       });
//     });
// };
// Eliminar post
// export const deleteDataOne = (id) => {
//   store.collection('post').doc(id).delete()
//     .then(() => {
//       console.log('Post eliminado');
//     })
//     .catch((error) => {
//       console.error('error moving document: ', error);
//     });
// };

// eslint-disable-next-line spaced-comment
/*export const deletePost = (id) => {
  store.collection('post').doc(id).delete({
    note:
  })
    .then((docRef) => {
      console.log('ID del documento: ', docRef.id);
    })
    .catch((error) => {
      console.error('no se elimino el documento: ', error);
    });
};*/

// eslint-disable-next-line spaced-comment
/*export function eliminar(id) {
  store.collection('post').doc(id).delete()
    .then(function() => {
    console.log('Document succesfully deleted')
  }).catch(function(error) {
    console.error('Error removing documement: ',error)
  });
}*/

// LA QUE SI FUNCIOn
// export const getData = () => {
//   const renderData = document.querySelector('#allPost');
//   store.collection('post').onSnapshot((querySnapshot) => {
//     console.log(querySnapshot);
//     renderData.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//       renderData.innerHTML += `
//       <div class= "postCard">
//         <div class ="textContainer">
//           <p id=${doc.id}>${doc.data().note}</p>
//         </div>
//         <div class="oldPostMenu">
//           <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
//           <p>09</p>
//           <a class="editText" id=""> Editar </button>
//           <a class="deleteText" id=""> Eliminar</button>
//         </div>
//       </div>`;
//     });
//   });
// };
//    data.forEach(doc => {
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
