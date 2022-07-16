const btn = document.querySelector(".click-me")
const result = document.querySelector(".result")
const diceP1 =document.querySelector(".dice-p1")
const diceP2 =document.querySelector(".dice-p2")
const dice1 = document.querySelectorAll(".dice-p1 .dice")
const dice2 = document.querySelectorAll(".dice-p2 .dice")

// removeAll()

function removeAll() {
    for (let i = 0; i < dice1.length; i++) {
        dice1[i].classList.add("hidden")
    }
    for (let i = 0; i < dice2.length; i++) {
        dice2[i].classList.add("hidden")
    }
}

function random() {
    return Math.floor(Math.random() * 6)
}

btn.addEventListener("click", function() {
    removeAll()
    let a = random()
    let b = random()
    
    dice1[a].classList.remove("hidden")
    let p1 = dice1[a].classList[1]
    
    dice2[b].classList.remove("hidden")
    let p2 = dice2[b].classList[1]

    if (p1 > p2) {
        result.textContent = "Player one won the game!!"
    } else if (p1 < p2) {
        result.textContent = "Player two won the game!!"
   } else {
        result.textContent = "Draw!!"
   }
})

