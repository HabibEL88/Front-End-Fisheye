//Mettre le code JavaScript lié à la page photographer.html


function init() {
  const params = new URLSearchParams(window.location.search);
  const photographerId = params.get("id");

  console.log(photographerId);

  // Fetch le .json
  // Récupérer uniquement la donnée du photographe avec l'id X
  // Créer une fonction displayData
  // Appeler le factory avec template "details"
  // Remplir la fonction factory correspondante pour modifier la donnée et construire la grille de médias
}

init();