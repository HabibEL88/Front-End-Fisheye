function getProfile() { 
    fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
        console.debug(data);
        const photographers = data.photographers;
        const photographHeader = document.querySelector(".photograph-header");

        // Récupère l'id du photographe à afficher sur la page
        let verifyUrl = new URLSearchParams(window.location.search);
        let photographerId = verifyUrl.get('id');

        photographers.forEach((photographer) => {
            // Verifie si l'url contient l'id du photographe
            if (photographer.id == photographerId) {
                // Affiche le profil du photographe
                const photographerModel = profileFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographHeader.appendChild(userCardDOM);

                // Affiche le formulaire de contact du photographe
                const contactModel = contactFactory(photographer);
                contactModel.getContactCardDOM();

                // Affiche la lightbox 
                const lightboxModel = lightboxFactory(photographer);
                lightboxModel.getLightboxDOM();

                // Récupère les bonnes photos et les affiches

                return;
            }
        });
    })
}

getProfile();