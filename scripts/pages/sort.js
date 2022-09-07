// AFFICHE LA LISTE DE TRI PAR CATEGORIES 
function getSortFactory() {

    const select = document.querySelectorAll('[name="sort-select"]')[0];
   
    select.addEventListener("change", (e) => {
        let selected = e.target.value;

        switch (selected) {
            case 'Popularité':
                pictures = pictures.sort((a1, a2) => a2.likes - a1.likes);
                buildGallery(pictures);
                break;
            case 'Date':
                pictures = pictures.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
                buildGallery(pictures);
                break;
            case 'Titre':
                pictures = pictures.sort((a, b) => a.title.localeCompare(b.title));
                buildGallery(pictures);
                break;
            default: break;
        }
    });

}