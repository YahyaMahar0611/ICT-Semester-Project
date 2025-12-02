function searchMovie() {
    let text = document.querySelector(".search-bar").value.toLowerCase();
    let cards = document.querySelectorAll(".movie-card");
    let found = false;
    for (let card of cards) {
        card.style.border = "1px solid #333";
        card.style.boxShadow = "none";
    }
    for (let card of cards) {
        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title === text) {
            found = true;

            card.style.border = "2px solid white";
            card.style.boxShadow = "0 0 15px white";

        } else {
            card.style.border = "1px solid #333";
        }
    }

    if (found) {
        console.log("Movie found!");
    } else {
        alert("Not Found");
    }
}

document.querySelector(".search-button").onclick = searchMovie;
