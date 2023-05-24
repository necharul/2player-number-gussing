let playerOneInput = document.querySelector(".playerOneInput")
let playerOneBox = document.querySelector(".playerOneBox")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoBox = document.querySelector(".playerTwoBox")
let player = document.querySelector(".player")
let chance = document.querySelector(".chance")
let error = document.querySelector(".error")

let count = 5


playerOneBox.addEventListener("click", function () {
    if (!playerOneInput.value) {
        error.innerHTML = "Please enter a something"
    } else {
        if (!(playerOneInput.value - 12)) {
            error.innerHTML = "Please enter a number"
        } else {
            if (playerOneInput.value < 10 && playerOneInput.value > 0) {
                playerOneInput.style.display = "none"
                playerOneBox.style.display = "none"
                playerTwoInput.style.display = "inline-block"
                playerTwoBox.style.display = "inline-block"
                player.innerHTML = "Player 2"
                error.innerHTML = ""
                chance.innerHTML = `chance: ${count}`
            } else {
                error.innerHTML = "Please enter a number between 1 to 10"
            }
        }
    }


})

playerTwoBox.addEventListener("click", function () {

    if (count > 1) {
        count--
        chance.innerHTML = `chance: ${count}`
        if (playerOneInput.value == playerTwoInput.value) {
            player.innerHTML = "Player 2 Winner"
            playerTwoBox.style.display = "none"
            error.innerHTML = ""
        } else {
            error.innerHTML = "Please try again"
        }
    } else {
        count = 0
        chance.innerHTML = `chance: ${count}`
        if (playerOneInput.value == playerTwoInput.value) {
            player.innerHTML = "Player 2 Winner"
            playerTwoBox.style.display = "none"
            error.innerHTML = ""
        } else {
            playerTwoBox.style.display = "none"
            player.innerHTML = "Player 1 Winner"
            error.innerHTML = ""
        }

    }

})
