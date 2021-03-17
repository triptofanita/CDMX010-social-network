import { onNavigate } from '../lib/routes.js';
import { store } from '../lib/firebase.js';
// import { getLikes } from '../lib/dataFirebase.js';

export const timeline = `
<header>
  <div class = "headTimeline">
    <img class="iconApp" src="assets/img/imagendeportada.png"></img>
    <img class="iconUser" src="assets/img/woman.svg"></img>
    </div>
</header>
<main>
  <div class= "textAreaPost">
    <textarea text="textArea" class="textPost" rows="5" cols="40" maxlength="200" placeholder="¿Qué te gustaría compartir?"></textarea>
    <button class="buttonNewPost" id="buttonNewPost"> Compartir </button>
  </div>

  <div class="containerPost" id="allPost"></div>

</main>
  <nav class="menuNavigate">
  <img class="menuImg" id="goTimeline" src="assets/img/home-page.svg"></img>
  <img class="menuImg" id="goGroups" src="assets/img/social-group.svg"></img>
  <img class="menuImg" id="goProfile" src="assets/img/gear.svg"></img>
  <img class="menuImg" id="close" src="assets/img/on-off-button.svg"></img>
  </nav>`;

// Esta es la función que guarda la data en Firestore
export const savePost = (note, like) => {
  const myPost = document.querySelector('#textPost').value;
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

// Esta es la función que crea el post
export const getDataOne = () => {
  const renderData = document.querySelector('#allPost');
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      // const publication = doc.data();
        // const numLikes = publication.like;
        console.log(`${doc.id} => ${doc.data()}`);
        renderData.innerHTML += `
        <div class= "postCard">
          <div class ="textContainer">
            <p id=${doc.id}>${doc.data().note}</p>
          </div>
          <div class="oldPostMenu">
            <button class="likeImg" id="likeImage" src="assets/img/growing-plant-svgrepo.svg" ></button>
            <p class="numLike"> </p>
              <a class="editText" id=""> Editar </button>
            <button class="deleteText" data-id='${doc.id}' id='${doc.id}'> Eliminar</button>
          </div>
        </div>`;
      });
    });
};

export function timelineView(container) {
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = timeline;
  getDataOne();
}

const updatePostOne = (id) => {
  store.collection('post').doc(id).update({
    note: myPost,
  }).then(() => {
    console.log('se actualizó documento');
  })
    .catch((error) => {
      console.log(error);
    });
};

// // función para eliminar post
// const eliminarPost = document.querySelector('.deleteText');
// eliminarPost.addEventListener('click'());
export const deleteDataOne = (id) => {
  store.collection('post').doc(id).delete()
    .then(() => {
      console.log('Post eliminado');
    })
    .catch((error) => {
      console.error('error moving document: ', error);
    });
};

document.addEventListener('click', (e) => {
  // guardar post
  if (e.target.matches('#buttonNewPost')) {
    e.preventDefault();
    savePost();
    getDataOne();
  }
  // borrar post
  if (e.target.matches('.deleteText')) {
    e.preventDefault();
    deleteDataOne();
    // deleteDataOne();
  }
  // dar like en post
  if (e.target.matches('#close')) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Sign-out successful');
        onNavigate('/');
      })
      .catch((error) => {
        alert(`An error happened , ${error}`);
      });
  } // si manda a la pantalla perfil
  if (e.target.matches('#goProfile')) {
    console.log('Dirige al perfil');
    onNavigate('/profile');
  }
  if (e.target.matches('#goGroups')) {
    console.log('Dirige al timeline');
    onNavigate('/groups');
  }
  if (e.target.matches('#goTimeline')) {
    console.log('Dirige al timeline');
    onNavigate('/timeline');
  }
});

// Usuario actual y función likes
export function activeUser() {
  return firebase.auth().currentUser;
}

// const getPost = (id) => store.collection('post').doc(id).get();

// const btnLike = document.querySelector('.likeImg');
// const user = activeUser();
// btnLike.forEach((button) => {
//   button.addEventListener('click', async (e) => {
//     const id = e.target.dataset.id;
//     const docGetPost = await getPost(id);
//     const postDocGetPost = docGetPost.data();
//     if (postDocGetPost.like.includes(user.email)) {
//       const filteredEmail = postDocGetPost.like.filter((email) => email !== user.email);
//       const updates = { like: filteredEmail };
//       updatePostOne(id, updates);
//     } else {
//       postDocGetPost.like.push(user.email);
//       const updates = { like: postDocGetPost.like };
//       updatePostOne(id, updates);
//       const renderData = document.querySelector('#allPost');
//       renderData['.likeImg'].textContent = `
//     <button class="likeImg" id="likeImage" src="assets/img/growing-plant-svgrepo.svg"></button>`;
//     }
//   });
// });
