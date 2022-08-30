
let totalNumberOfLikes = 0;
function updateTotalCounter() {
    // Met à jour le nombre total de likes dans l'interface
    let totalCounter = document.querySelector(".totalCounter");
    totalCounter.value = totalNumberOfLikes ;
}

function buildTotalLikes(pictures) {
    const totalLikesContainer = document.querySelector(".totalLikesContainer");
    const totalLikes = document.createElement("input");
    const heart = document.createElement("label");

    totalLikesContainer.style.position = "fixed";
    totalLikesContainer.style.bottom = "0";
    totalLikesContainer.style.right = "166px";    
    totalLikesContainer.style.background = "#D88876";
    totalLikesContainer.style.display = "flex";

    totalLikes.style.fontSize = "20px";
    //totalLikes.style.height                 = "100px";
    //totalLikes.style.width                  = "100px";
    totalLikes.classList.add("totalCounter");
    totalLikes.style.height = "50px";
    totalLikes.style.border = "none";
    totalLikes.style.width = "55px"; 
    totalLikes.style.fontSize = "24px";
    totalLikes.style.background = "#D88876";
    totalLikes.style.paddingLeft = "20px";

    heart.innerHTML = '<i class="fas fa-heart" title="Likes total"></i>';
    heart.style.fontSize = "24px";
    heart.style.display = "block";
    heart.style.lineHeight = "50px";
    heart.style.paddingRight = "10px";

    totalLikesContainer.appendChild(totalLikes);
    totalLikesContainer.appendChild(heart);

    // Compte le nombre total de likes
    totalNumberOfLikes = 0;
    pictures.forEach((picture) => totalNumberOfLikes += Number(picture.likes));
    updateTotalCounter();
}


function likesCounter() {

    const buttonLike = document.querySelectorAll(".buttonHeart");

    // Incrémente le nombre de likes et dislikes
    for (let i = 0; i < buttonLike.length; i++) {
        let likeBtn = buttonLike[i];

        likeBtn.addEventListener("click", () => {

            likeBtn.classList.toggle("selected");
            let counter = likeBtn.parentElement.children[0];

            if (likeBtn.classList.contains("selected")) {
                counter.value++;
                likeBtn.style.color = "#D88876";
                // Met à jour le nombre total de likes
                totalNumberOfLikes++;
                updateTotalCounter();
            }
            else {
                counter.value--;
                likeBtn.style.color = "#901C1C";
                // Met à jour le nombre total de likes
                totalNumberOfLikes--;
                updateTotalCounter();
            }
        })
    }
}