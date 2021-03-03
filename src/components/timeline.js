export const timeline = `
<header>
<div class = "headTimeline">
    <img class="iconApp" src="assets/img/imagendeportada.png"></img>
    <img class="iconUser" src="assets/img/woman.svg"></img>
    </div>
</header>
<main>
<div class= "textAreaPost">
<textarea text="textArea" class="textPost" rows="5" cols="45" placeholder="¿Qué te gustaría compartir?"></textarea>
<button class="buttonNewPost" id="buttonNewPost"> Compartir </button>
</div>
<div class="oldPost">
<div class="textOldPost">
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam..."</p>
  </div>
  <div class="oldPostMenu">
  <img class="likeImg" src="assets/img/growing-plant-svgrepo.svg"></img>
  <p>09</p>
  <a class="editText" id=""> Editar </button>
  <a class="deleteText" id=""> Eliminar</button>
  </div>
</div>
<nav class="menuNavigate">
  <img class="menuImg" id="goTimeline" src="assets/img/home-page.svg"></img>
  <img class="menuImg" id="goGroups" src="assets/img/social-group.svg"></img>
  <img class="menuImg" id="goProfile" src="assets/img/gear.svg"></img>
  <img class="menuImg" id="close" src="assets/img/on-off-button.svg"></img>
</nav>`;

// para cerrar sesión puede ser etiqueta a pero sin href porque manda a la misma pantalla
document.addEventListener('click', (e) => {
  if (e.target.matches('#close')) {
      firebase.auth().signOut()
      .then(() => {
          alert('Sign-out successful');
          onNavigate('/');
      }).catch((error) => {
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
