// Creating empty cards
createEmptyCards();

// Create bomb and queen
createBombsAndQueen();

// timer 
var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    document.querySelector(".js-timer").innerHTML = seconds;
}, 1000);

// Actual game
var cards = document.querySelectorAll(".js-card");
var lives = 3;
for (var index = 0; index < cards.length; index++) {
    cards[index].addEventListener("click", function () {
        switch (this.dataset.card) {
            case "queen":
                this.querySelector("img").src = "./assets/img/queen.png";
                clearInterval(timer);

                setTimeout(function () {
                    document.body.removeChild(document.querySelector(".js-game"));
                }, 1000);
                break;
            case "bomb":
                this.querySelector("img").src = "./assets/img/bomb.png";
                lives--;
                document.querySelector(".js-lives").innerHTML = lives;
                if (lives == 0) {
                    clearInterval(timer);
                    setTimeout(function () {
                        document.body.removeChild(document.querySelector(".js-game"));
                    }, 1000);
                }
                break;
            case "empty":
                this.querySelector("img").src = "./assets/img/empty-card.png";
                break;
        }
    });
}

// Functions
function createEmptyCards() {
    var amountOfCards = 50;

    for (var index = 0; index < amountOfCards; index++) {
        // Creation of cards
        var cardElement = document.createElement("div");
        cardElement.classList.add("js-card");
        cardElement.classList.add("c-card");
        cardElement.dataset.card = "empty";

        // Creation of image
        var imgElement = document.createElement("img");
        imgElement.src = "./assets/img/card.png";

        // Add the image in the card
        cardElement.appendChild(imgElement);

        // Adding cards to the game
        document.querySelector(".js-game").appendChild(cardElement);
    }
}

function createBombsAndQueen() {
    var cards = document.querySelectorAll(".js-card");

    // change queen
    var randomQueenIndex = Math.floor(Math.random() * cards.length); // 26
    console.log(randomQueenIndex);
    cards[randomQueenIndex].dataset.card = "queen";

    // change bombs
    var randomBombs = [];

    while (randomBombs.length < 4) {
        var randomIndex = Math.floor(Math.random() * cards.length);

        if (randomIndex != randomQueenIndex && randomBombs.includes(randomIndex) == false) {
            randomBombs.push(randomIndex);
        }
    }

    for (var index = 0; index < randomBombs.length; index++) {
        cards[randomBombs[index]].dataset.card = "bomb";
    }
}