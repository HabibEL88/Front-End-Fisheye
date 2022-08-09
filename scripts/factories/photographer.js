function photographerFactory(data) {
    // Récupérer les autres propriétés
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Modifier pour avoir quelque chose qui ressemble aux maquettes
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }

    return getUserCardDOM();
}