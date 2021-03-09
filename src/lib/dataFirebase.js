import { store, auth } from './firebase.js';

// Crear Data

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
