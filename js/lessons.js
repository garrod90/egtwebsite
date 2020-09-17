const lessonCards = document.getElementById("lessons-cards");
const switchBackButton = document.querySelectorAll(".switch-back")
const invisible = document.querySelectorAll(".invisible-container");
const switches = document.querySelectorAll(".switch")


for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", () => {
        lessonCards.classList.add("hide-display");
        if (i === 0) {
            invisible[0].classList.add("visible-container")
        } else if (i === 1) {
            invisible[1].classList.add("visible-container")
        } else if (i === 2) {
            invisible[2].classList.add("visible-container")
        }

    });
}

for (let i = 0; i < switchBackButton.length; i++) {
    switchBackButton[i].addEventListener("click", () => {
        invisible[i].classList.remove("visible-container")
        lessonCards.classList.remove("hide-display")

    })
}
