function getMedias() {
    fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
        const medias = data.media;

        // Verifie si l'url contient l'id du photographe
        let verifyUrl = new URLSearchParams(window.location.search);
        const photographerId = verifyUrl.get('id');
        pictures = medias.filter(obj => obj.photographerId == photographerId);

        // Affiche la gallerie d'images 
        buildGallery(pictures); 
        getSortFactory();  
    })
}

function buildGallery(pictures) {
    const photographMedias = document.querySelector(".photograph-medias");
    photographMedias.innerHTML = "";

    pictures.forEach((picture) => {
        const mediaModel = mediasFactory(picture);
        const mediaCardDOM = mediaModel.getMediasCardDOM();
        photographMedias.appendChild(mediaCardDOM);
    });
}

getMedias();