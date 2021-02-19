// lista de todas las rutas con template literals `${}`
// function createHome() {
//   const home = `
//   <div class= "inicio">
//     <div class= "containerImg">
//         <img class="image" src="img/imagendeportada.png"></img>
//     </div>
//     <div class="session">
//         <button class="buttonSession" id="signup">Iniciar Sesión</button>
//         <button class="buttonSession" id="login">Regístrate</button>
//     </div>
//     <div>
//         <a class="moreInfo" href="">Conócenos</a>
//     </div>
//   </div>
//   `;
//   return home;
// }

function setHome() {
  const containerPageHome = document.getElementById('root');
  let createPageHome = '';
  // createPageHome += createHome;
  containerPageHome.innerHTML += `
  <div class= "inicio">
    <div class= "containerHome">
        <img class="image" src="img/imagendeportada.png"></img>
    </div>
    <div class="session">
        <button class="buttonSession" id="signup">Iniciar Sesión</button>
        <button class="buttonSession" id="login">Regístrate</button>
    </div>
    <div>
        <a class="moreInfo" href="">Conócenos</a>
    </div>
  </div>
  `;
  console.log(createPageHome);
}

setHome();
