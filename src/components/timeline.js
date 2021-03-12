import { onNavigate } from '../lib/routes.js';

import { savePost, getDataOne } from '../lib/dataFirebase.js';

export const timeline = `
<header>
  <div class = "headTimeline"></div>
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

function createPostCard(comment) {
  const card = `
    <div class="otroPost">
      <p>el texto es ${comment.id}
    </div>
    <div class="otroMenu">
      <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
      <p>09</p>
      <a class="editText" id=""> Editar </button>
      <a class="deleteText" id="">Eliminar</button>
    </div>
  `;
  return card;
}

// function setPosts () {
//   const containerPost = document.getElementById('allPost');
//   const posts = getDataOne();
//   const postCards = posts.forEach(post => createPostCard(post));
//   containerPost.innerHTML = postCards;
// }

function showPost(contenidos) {
  const containerPost = document.getElementById('allPost');
  let boxPost = '';
  contenidos.forEach((conte) => {
    boxPost += createPostCard(conte);
  });
  containerPost.innerHTML = boxPost;
}
showPost(createPostCard.comment);

// function showCards(personajes) {
//   const cards = document.getElementById('container')
//   let conteiner = ''
//   personajes.forEach((personaje) =>  {
//       conteiner += postCard(personaje)
//   });
//   cards.innerHTML = conteiner;

// }

// para CRUD firebase
// debugger
// document.addEventListener('click', (e) => {
//   if (e.target.matches('#buttonNewPost')) {
//     e.preventDefault();
//     createPost()
//       .then((post) => {
//         console.log(post);
//       }).catch((error) => {
//         console.log(error);
//       });
//   }
// });

// // crear el template dl post vacio
// function createPostDiv(unPost) {
//   const post = `
//   <div class="otroPost">
//   <p>el texto es ${getData.id}
//   </div>
//   <div class="otroMenu">
//   <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
//   <p>09</p>
//   <a class="editText" id=""> Editar </button>
//   <a class="deleteText" id=""> Eliminar</button>
//   </div>
//   `;
//   return post;
// }

// function setPost(posts) {
//   const containerPost = document.querySelector('.allPost');
//   let emptyPost = '';
//   posts.forEach(postes => emptyPost += createPost(postes));
//   containerPost.innerHTML = emptyPost;
// }
// document.addEventListener('DOMContentLoaded', () => {
//   getDataOne
// })

document.addEventListener('click', (e) => {
  if (e.target.matches('#buttonNewPost')) {
    e.preventDefault();
    savePost();
    getDataOne();
    // .then((post) => {
    // // una variable para el div donde se imprimirá
    //   const posting = document.querySelector('.textOldPost');
    //   getData.forEach((doc) => {
    //   posting.innerHTML = '';
    //   posting.innerHTML += `
    //   <p>${getData.id} </p>
    //   `
    //   )};
    // // }).catch((error) => {
    // //   console.log(error);
    // // });
    // });
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
