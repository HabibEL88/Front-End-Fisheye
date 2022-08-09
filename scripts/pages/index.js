    
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const f = fetch("/data/photographers.json");
        const rawData = await f;
        const jsonData = await rawData.json();
        console.debug(jsonData);
/*
J'ai le fichier json avec les données de chaque photographe.
J'ai une variable qui contient ces données
Mon objet contient 1 array avec 59 éléments de médias & 1 array avec 6 éléments de photographes
jsonData => Object { photographers: (6) […], media: (59) […] }

Je vais faire une variable qui va récupérer ces données.

Puis, je vais l'utiliser pour l'intégrer dans l'array en-dessous
*/
        const photographers = jsonData.photographers;
        return ({
            photographers: photographers
        })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const userCardDOM = photographerFactory(photographer);
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        // console.debug("init");
        const fetchPhotographers = getPhotographers();
        // console.debug("init2");
        const { photographers } = await fetchPhotographers;
        // console.debug("init3");
        displayData(photographers);
        // console.debug("init4");
    };
    
    init(); // Fonction asynchrone => Je lance et ça va continuer
    // document.getElementById("main").style.backgroundColor = "red";
    // console.debug("red");
