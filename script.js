const btn = document.querySelector("button");
const body = document.body;

let checker = true;

const toggleDark = () => {
    if(checker == true) {
        body.classList.add("dark-mode");
        checker = false;
    } else if (checker == false) {
        body.classList.remove("dark-mode");
        checker = true;
    }
}

btn.addEventListener("click", function() {
    toggleDark();
});