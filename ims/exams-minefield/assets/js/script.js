var amountOfCards = 100;
var lives = 3;
var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    document.querySelector(".js-timer").innerHTML = seconds;
}, 1000)
// create cards
createCards();

// add random a queen and 5 bombs
addRandomBombAndQueen();

// click events toevoegen 
var cards = document.querySelectorAll(".c-card");

for (var index = 0; index < cards.length; index++) {
    cards[index].addEventListener("click", function () {
        switch (this.dataset.type) {
            case "empty":
                this.src = "./assets/img/empty-card.png";
                break;
            case "bomb":
                lives--;
                document.querySelector(".js-lives").innerHTML = lives;

                if (lives == 0) {
                    clearInterval(timer);
                    document.querySelector(".js-result").innerHTML = "You idiot, you killed the queen";
                    document.body.removeChild(document.querySelector(".js-game"));
                }
                this.src = "./assets/img/bomb.png";
                break;
            case "queen":
                document.body.removeChild(document.querySelector(".js-game"));
                clearInterval(timer);

                document.querySelector(".js-result").innerHTML = "You saved the queen";
                this.src = "./assets/img/queen.png";
                break;
        }
    });
}

function createCards() {
    for (var index = 1; index <= amountOfCards; index++) {
        var cardElement = document.createElement("img");
        cardElement.src = "./assets/img/card.png";
        cardElement.classList.add("c-card");
        cardElement.dataset.type = "empty";

        document.querySelector(".js-game").appendChild(cardElement);
    }
}

function addRandomBombAndQueen() {
    var queen = Math.floor(Math.random() * amountOfCards); // 85 

    var bombs = []; // [5, 10, 70, 80, 6]

    while (bombs.length < 5) {
        var randomBomb = Math.floor(Math.random() * amountOfCards);

        if (randomBomb != queen && bombs.includes(randomBomb) == false) {
            bombs.push(randomBomb);
        }
    }

    var cards = document.querySelectorAll(".c-card"); 
    cards[queen].dataset.type = "queen";

    for (var index = 0; index < bombs.length; index++) {
        cards[bombs[index]].dataset.type = "bomb";
    }
}