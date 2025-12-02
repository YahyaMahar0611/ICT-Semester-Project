
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
const email = document.getElementById("email").value.trim();
const suggestion = document.getElementById("suggestion").value.trim();


if (email === "" || suggestion === "") {
    alert("Please fill all contact fields!");
    return;
}

alert("Thank you for your suggestion!");
this.reset();


});


document.getElementById("movieForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value.trim();
const category = document.getElementById("category").value;


if (name === "" || category === "") {
    alert("Please fill all fields!");
    return;
}

const movieGrid = document.getElementById("addedMovies");

const div = document.createElement("div");
div.className = "movie-item";
div.textContent = `${name} (${category})`;

movieGrid.appendChild(div);
this.reset();


});
