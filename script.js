const btn = document.querySelector("button");
const body = document.body;


btn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});