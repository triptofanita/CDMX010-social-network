export const groups = `
<h1>Hola, este espacio es para compartir y conversar</h1>
<nav class="menuNavigate">
  <img class="menuImg" id="goTimeline" src="assets/img/home-page.svg"></img>
  <img class="menuImg" id="goGroups" src="assets/img/social-group.svg"></img>
  <img class="menuImg" id="goProfile" src="assets/img/gear.svg"></img>
  <img class="menuImg" id="close" src="assets/img/on-off-button.svg"></img>
</nav>`;

// si cierra botón
// para cerrar sesión
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

