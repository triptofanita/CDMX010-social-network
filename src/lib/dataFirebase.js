import { db, auth } from './firebase.js';

// agrego observador para ver mis colecciones
// ver dato de autentificación de los usuarios
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('auth: signin');
    db.collection('post')
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
        setPost(snapshot.docs);
      });
  } else {
    setPost([]);
  }
});

// poner los datos en un div
const demoPost = document.querySelector('.newPost');
const setPost = (data) => {
  if (data.length) {
    let template = '';
    data.forEach(doc => {
      const post = doc.data();
      console.log(post);
      const container = `
      <h3>${post.Title}</h3>
      <p>${post.descripction}</p>
      `;
      template += container;
    });
    demoPost.innerHTML = template;
  } else {
    demoPost.innerHTML = `<p>accede para ver publicaciones</p>
    `;
  }
};

// const createData = () => {
// }

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });
