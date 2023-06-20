
const drawButton = document.querySelector(".draw-button")


drawButton.addEventListener("click", generagetRandom)

function generagetRandom(min, max) {
    const inputFrom = document.querySelector(".input-from").value
    const inputTo = document.querySelector(".input-to").value

    min = Math.ceil(inputFrom)
    max = Math.floor(inputTo)
    alert(Math.floor(Math.random() * (max - min + 1)) + min)
}

