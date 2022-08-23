//Mettre le code JavaScript lié à la page photographer.html

function getProfile() { 
  fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
      const photographers = data.photographers;
      const photographHeader = document.querySelector(".photograph-header");

      photographers.forEach((photographer) => {
          // Verifie si l'url contient l'id du photographe
          let verifyUrl = new URLSearchParams(window.location.search);
          verifyUrl.has(photographer.id);
          let param = verifyUrl.get('id');

          if (photographer.id == param) {
              // Affiche le profil du photographe
              const photographerModel = profileFactory(photographer);
              const userCardDOM = photographerModel.getUserCardDOM();
              photographHeader.appendChild(userCardDOM);

              // Affiche le formulaire de contact du photographe
              const contactModel = contactFactory(photographer);
              contactModel.getContactCardDOM();
          }
      });
  })
}

getProfile();