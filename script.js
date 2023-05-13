const movieCards = document.getElementsByClassName("movie-card");

for (const movieCard of movieCards) {
    movieCard.addEventListener("mouseenter", function (event) {
            event.target.getElementsByTagName("div")[0].classList.toggle("show");
    });
    movieCard.addEventListener("mouseleave", function (event) {
            event.target.getElementsByTagName("div")[0].classList.toggle("show");
        });
}