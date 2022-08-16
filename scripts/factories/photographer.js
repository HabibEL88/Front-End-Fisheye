function photographerFactory(data, template) {
    // Récupérer les autres propriétés
    const {  name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographers_id_photos/${portrait}`;

    //affichage des photographes
    function getUserCardDOM() {
        // Modifier pour avoir quelque chose qui ressemble aux maquettes
        const article = document.createElement( 'article' );
        const a = document.createElement('a');
        article.appendChild(a);
        a.setAttribute("href", `/photographer.html?id=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil de ${name}`);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const citycountry = document.createElement("span");
        citycountry.textContent = city.concat(", ", country);
        citycountry.setAttribute("aria-label", "location");
        const slogan = document.createElement("p");
        slogan.textContent = tagline;
        const priceDay = document.createElement("div");
        priceDay.setAttribute("class", "price");
        priceDay.textContent = price + "€/jour";

        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(citycountry);
        a.appendChild(slogan);
        a.appendChild(priceDay);
        
        return (article);
    }

    

    if (template === "details")
        return getUserDetailsDOM();
    else if (template === "index")
        return getUserCardDOM();
    return null;

    function getUserDetailsDOM() {
        // GetElementById => remplacer ce que je peux remplacer
        const header = document.querySelector(".photograph-header");
        const newDiv = document.createElement("div");
        header.prepend(newDiv);
    
        const photographerName = document.createElement("h2");
        newDiv.appendChild(photographerName);
        photographerName.setAttribute("tabIndex", 0);
        photographerName.setAttribute("aria-label", name);
        photographerName.textContent = name;
        // Construire mon carousel de media
    }
    return {getUserCardDOM, getUserDetailsDOM}
}