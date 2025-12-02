// Get tab buttons and forms
const loginTab = document.getElementById("loginTab");
const signinTab = document.getElementById("signinTab");
const loginForm = document.getElementById("loginForm");
const signinForm = document.getElementById("signinForm");

// Switch forms
loginTab.addEventListener("click", () => {
loginTab.classList.add("active");
signinTab.classList.remove("active");
loginForm.classList.add("active");
signinForm.classList.remove("active");
});

signinTab.addEventListener("click", () => {
signinTab.classList.add("active");
loginTab.classList.remove("active");
signinForm.classList.add("active");
loginForm.classList.remove("active");
});

loginForm.addEventListener("submit", function(e){
e.preventDefault();
window.location.href = "movathron.html";
});

signinForm.addEventListener("submit", function(e){
e.preventDefault();
window.location.href = "movathron.html";
});
