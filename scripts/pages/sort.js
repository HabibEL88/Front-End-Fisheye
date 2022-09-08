// AFFICHE LA LISTE DE TRI PAR CATEGORIES 
function getSortFactory() {

    const select = document.querySelectorAll('[name="sort-select"]')[0];
   
    select.addEventListener("change", (e) => {
        let selected = e.target.value;

        switch (selected) {
            case 'Popularité':
                pictures = pictures.sort((a1, a2) => a2.likes - a1.likes);
                break;
            case 'Date':
                pictures = pictures.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
                break;
            case 'Titre':
                pictures = pictures.sort((a, b) => a.title.localeCompare(b.title));
                
                break;
            default: break;
        }

        buildGallery(pictures);

        photographers.map( (o) => { // equivaut au .for (à etudier) //
            const lightboxModel = lightboxFactory(o);
            lightboxModel.getLightboxDOM();
        })
        
    });

}