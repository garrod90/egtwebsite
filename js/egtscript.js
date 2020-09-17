// global variables

let paragraph = document.getElementById("info-paragraph")
let button = document.getElementById("more-info-button")
let closeButton = document.getElementById("close-info-button")
let egtLogo = document.getElementById("logo-heading")
    // let change = false;
    // const slideContainer = document.querySelector(".container")

const hide = function() {
    paragraph.style.display = "none";
    closeButton.style.display = "none";
    button.style.display = "block";
}
hide()

const open = function() {

    paragraph.style.display = "block";
    paragraph.classList.add("paragraph-fadein")
    closeButton.style.display = "block"
        // paragraph.style.opacity = "1" 

    button.style.display = "none"

}
button.onclick = open;
closeButton.onclick = hide;

