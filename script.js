const btn = document.querySelector("#dark-mode");
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

const dropMenu = document.querySelector(".nav-content");
const dropElements = document.querySelector(".navigation");
const dropBtn = document.querySelector(".menu")

const dropDown = () => {
    dropMenu.classList.toggle("show");
    dropElements.classList.toggle("show");
}

dropBtn.addEventListener("click", () => {
    dropDown();
});

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  })