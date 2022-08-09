function photographerFactory(data) {
    // Récupérer les autres propriétés
    const {  id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/photographers_id_photos${portrait}`;

    //affichage des photographes
    function getUserCardDOM() {
        // Modifier pour avoir quelque chose qui ressemble aux maquettes
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", 'Photo de profil de ${name}');
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const citycountry = document.createElement("span");
        citycountry.textContent = city.concat(",", country);
        const slogan = document.createElement("p");
        slogan.textContent = tagline;
        const priceDay = document.createElement("div");
        priceDay.setAttribute("class", "price");
        priceDay.textContent = price + "€/jour";

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(citycountry);
        article.appendChild(slogan);
        article.appendChild(priceDay);
        
        return (article);
    }

    return getUserCardDOM();
}