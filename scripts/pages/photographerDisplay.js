// Ici nous allons mettre le code JS lié à la page photographer html
// recuperation de l'id dans l'url

function getPhotographerId(){
    return new URL(location.href).searchParams.get("id");
}

const photographerId = getPhotographerId();

async function displayProfile(photographers) {
    photographers.forEach((photographer) => {
      if (photographer.id == photographerId) {
        const photographersData = photographerFactory(photographer);
        photographersData.getPhotographerProfilDOM();
      }
    });
  }