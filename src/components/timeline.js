import { onNavigate } from '../lib/routes.js';
import { store } from '../lib/firebase.js';

export const timeline = `
  <header class="timelineHeader">
    <div class = "headTimeline">
      <img class="iconApp" src="assets/img/imagendeportada.png">
      <img class="iconUser" src="assets/img/woman.svg">
    </div>
  </header>
  <section id="section">
    <div class="divTextArea">
      <div class= "textAreaPostBlue">
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="200" placeholder="¿Qué te gustaría compartir?"></textarea>
        <button class="buttonNewPost" id="buttonNewPost"> Compartir </button>
      </div>
    </div>
    <div class="postSection">
      <div class="containerPost" id="allPost"></div>
    </div>
  </section>
    <nav class="menuNavigate">
      <img class="iconAppTwo" src="assets/img/imagendeportada.png">
      <div class="textAppNavigate">
        <h3>ECO APP</h3>
      </div>
        <img class="menuImg" id="goTimeline" src="assets/img/home-page.svg">
        <img class="menuImg" id="close" src="assets/img/on-off-button.svg">
    </nav>
`;

// Esta es la función que guarda la data en Firestore
export const savePost = () => {
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
  while (renderData.firstChild) {
    renderData.removeChild(renderData.firstChild);
  }
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        renderData.innerHTML += `
        <div class= "postCard" data-id='${doc.id}'>
          <div class ="textContainer">
            <p id=${doc.id}>${doc.data().note}</p>
          </div>
          <div class="oldPostMenu">
            <img class="likeImg" id="likeImage" src="assets/img/growing-plant-svgrepo.svg"></>
            <p class="numLike"> </p>
              <div class="buttonEdit">
                <button class="editText"> Editar </button>
              </div>
              <div class="buttonDelete">
                <button class="deleteText" data-id='${doc.id}'> Eliminar </button>
              </div>
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

// const updatePostOne = (id) => {
//   store.collection('post').doc(id).update({
//     note: myPost,
//   }).then(() => {
//     console.log('se actualizó documento');
//   })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const deleteDataOne = (postId) => {
  store.collection('post').doc(postId).delete()
    .then(() => {
      console.log('post eliminado: ', postId);
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
    const postId = e.target.dataset.id;
    deleteDataOne(postId);
    getDataOne();
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
  if (e.target.matches('#goTimeline')) {
    console.log('Dirige al timeline');
    onNavigate('/timeline');
  }
});
