import { onNavigate } from '../lib/routes.js';
import { store } from '../lib/firebase.js';
import { savePost, deleteDataOne } from '../lib/dataFirebase.js';

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

// Esta es la función que crea el post
export const getDataOne = () => {
  const renderData = document.querySelector('#allPost');
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        renderData.innerHTML += `
        <div class= "postCard">
          <div class ="textContainer">
            <p id=${doc.id}>${doc.data().note}</p>
          </div>
          <div class="oldPostMenu">
            <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
            <p>09</p>
            <a class="editText" id=""> Editar </button>
            <button class="deleteText" id=${doc.id}> Eliminar</button>
          </div>
        </div>`;
      });
    });
};
// función para eliminar post

const botonDelete = document.querySelector('.deleteText');
botonDelete.addEventListener('click, borrar');
function borrar() {
borrar.deleteDataOne(doc.id);
}



document.addEventListener('click', (e) => {
  if (e.target.matches('#buttonNewPost')) {
    e.preventDefault();
    savePost();
    getDataOne();
  }
  if (e.target.matches('.deleteText')) {
    deleteDataOne();
  }
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
