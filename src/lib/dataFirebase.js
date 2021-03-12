import { store } from './firebase.js';

export const savePost = () => {
  const myPost = document.querySelector('.textPost').value;
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

// función para leer la data
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
          <a class="deleteText" id=""> Eliminar</button>
        </div>
      </div>`;
      });
    });
};

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
