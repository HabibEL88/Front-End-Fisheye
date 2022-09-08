function lightboxFactory(data) {
    const { image , video, title } = data;

    function getLightboxDOM() {
        const main = document.querySelector("#main");
        const lightbox = document.querySelector(".lightbox");
        const previous = document.createElement("i");
        const next = document.createElement("i");
        const closeBtn = document.createElement("i");
        const container = document.createElement("div");
        const titleMedia = document.createElement("p");

        /*previous.className = "previous fas fa-chevron-left";
        previous.setAttribute("title", "Image précédente");*/
        previous.innerHTML = '<button><i class="fas fa-chevron-left" title="image précédente"></i></button>';
        previous.style.position = "absolute";
        previous.style.top = "47%";
        previous.style.left = "16%"; 
        previous.style.fontSize = "40px"; 
        previous.style.color = "#901C1C";
        previous.style.cursor = "pointer";
        previous.classList.add = "previous";
        previous.setAttribute("title", "Image précédente");

        next.innerHTML = '<button><i class="fas fa-chevron-right" title="image suivante"></i></button>';
        next.style.position = "absolute";
        next.style.top = "47%"; 
        next.style.right = "16%";  
        next.style.fontSize = "40px";
        next.style.color = "#901C1C";
        next.style.cursor = "pointer";
        next.classList.add = "next";
        next.setAttribute("title", "Image suivante");

        closeBtn.innerHTML = '<button><i class="fas fa-times" title="Fermer la lightbox"></i></button>';
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "6%";
        closeBtn.style.right = "16%";
        closeBtn.style.fontSize = "40px";
        closeBtn.style.color = "#901C1C";
        closeBtn.style.cursor = "pointer";
      
        container.classList.add("container"); 
        container.style.width = "55%";
        container.style.height = "85%";
        container.style.position = "absolute";
        container.style.margin = "auto";
        container.style.top = "0";
        container.style.bottom = "0";
        container.style.left = "0"; 
        container.style.right = "0";

        const img = document.createElement("img");
        const vid = document.createElement("video");
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.borderRadius = "5px";
            img.style.objectFit = "cover";
            img.setAttribute("src", "");
            img.setAttribute("alt", "");
            container.appendChild(img);
            vid.style.width = "100%";
            vid.style.height = "100%";
            vid.style.borderRadius = "5px";
            vid.style.objectFit = "cover";
            vid.setAttribute("src", "");
            vid.setAttribute("alt", "");
    
        titleMedia.style.fontSize = "24px";
        titleMedia.style.color = "#901C1C";
        titleMedia.style.width = "100%";
        titleMedia.style.height = "30px";
        titleMedia.style.textAlign = "start";

        // Ouverture de la lightbox
        function openLightbox() {
            console.log('caca2')
            lightbox.style.display = "block";
            lightbox.setAttribute("aria-hidden", "false");
            main.setAttribute("aria-hidden", "true");
            lightbox.focus();
        }

        console.log('here')

        // Affiche le média sélectionné
        function displayMedia(selectedMedia) {
            img.src = selectedMedia.src; 
            img.alt = selectedMedia.alt;
            titleMedia.textContent = selectedMedia.alt;

            if (typeof selectedMedia.alt === "undefined") {
                img.replaceWith(vid);
                vid.src = selectedMedia.src;
                vid.alt = selectedMedia.alt; 
                titleMedia.textContent = "Wild horses in the mountains";
                vid.play();
            }
            else {
                vid.replaceWith(img);
            }
        }

        // Affiche le média précédent
        function previousMedia(e) {
            console.log(e.target)
            console.log(selectedMedia)
            console.log(pictures.indexOf(selectedMedia.src, 0))
            selectedMedia.classList.remove("selected");

            selectedMedia = medias[i].querySelector(".currentMedia");
            selectedMedia.classList.add("selected");
            displayMedia();
        }
        previous.addEventListener("click", (e) => {
            e.preventDefault();
            previousMedia(e);
        })

        // Affiche le média suivant
        function nextMedia() {
            selectedMedia.classList.remove("selected");

            console.log(sources.indexOf(selectedMedia.src, 0));
            currentIndex = (sources.indexOf(selectedMedia.src, 0)) + 1;
            console.log(sources[currentIndex])
            console.log(document.querySelectorAll(`[src="http://localhost:5500/assets/medias/Sport_Next_Hold.jpg"]`))
            selectedMedia = medias[i].querySelector(".currentMedia");
            selectedMedia.classList.add("selected");
            displayMedia();
        }
        next.addEventListener("click", (e) => {
            e.preventDefault();
            nextMedia();
        })

        const medias = document.querySelectorAll(".galleryLink");
        console.log(medias)
        let sources = [];
        for (let i = 0; i < medias.length; i++) {
            mediaLink = medias[i];

            console.log(mediaLink.children[0].src)
            sources.push(mediaLink.children[0].src);

            mediaLink.addEventListener("click", (e) => {
                e.preventDefault();
                openLightbox();
                console.log(e.target)

                selectedMedia = e.target
                console.log(selectedMedia)
                selectedMedia.classList.add("selected");

                displayMedia(selectedMedia);
            })
                
                

                // Fermeture de la ligtbox
                function closeLightbox() {
                    selectedMedia.classList.remove("selected");
                    lightbox.style.display = "none";
                    lightbox.setAttribute("aria-hidden", "true");
                    main.setAttribute("aria-hidden", "false");
                }
                closeBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    closeLightbox();
                })

                // Accessibilité Lightbox
                document.addEventListener("keydown", (e) => {
                    const keyCode = e.key;

                    if (lightbox.style.display == "block") {
                        switch (keyCode) {
                            case "Escape":
                                closeLightbox()
                                break;
                            case "ArrowLeft":
                                previousMedia();
                                break;
                            case "Arrowright":
                                nextMedia();
                                break;
                            default: break;
                        }
                    }
                });
        }
        
        lightbox.appendChild(container);
        container.appendChild(titleMedia);
        lightbox.appendChild(previous);
        lightbox.appendChild(next);
        lightbox.appendChild(closeBtn);     
    }

    return { image, video, title, getLightboxDOM };
}