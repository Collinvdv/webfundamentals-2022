// Initial data
var selectedCards = [];
var score = 0;
var amountOfClicks = 0;
var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    document.querySelector(".js-timer").innerHTML = seconds;
}, 1000)

// Add cards to the screen
addCards();

// Add click events to cards
clickCards();

// Add cards 
function addCards() {
    // Cars array
    var cards = [
        "gallery1",
        "gallery1",
        "gallery2",
        "gallery2",
        "gallery3",
        "gallery3",
        "gallery4",
        "gallery4",
    ];

    // shuffle cards 
    cards = shuffleCards(cards);

    // loop over every card
    for (var index = 0; index < cards.length; index++) {
        var cardElement = document.createElement("div");
        cardElement.className = "c-card js-card";
        cardElement.dataset.card = cards[index];

        var backgroundElement = document.createElement("img");
        backgroundElement.src = "./assets/img/background.png";

        cardElement.appendChild(backgroundElement);

        document.querySelector(".js-game").appendChild(cardElement);
    }
}

function shuffleCards(cards) {
    var shuffleCards = [];

    while (cards.length > 0) {
        var randomCard = Math.floor(Math.random() * cards.length);

        shuffleCards.push(cards[randomCard]);

        cards.splice(randomCard, 1);
    }

    return shuffleCards;
}

function clickCards() {
    var cards = document.querySelectorAll(".js-card");

    for (var index = 0; index < cards.length; index++) {
        cards[index].addEventListener("click", function () {
            // the amount of clicks
            amountOfClicks++;
            document.querySelector(".js-amount").innerHTML = amountOfClicks;

            // real logic
            this.querySelector("img").src = "./assets/img/" + this.dataset.card + ".png";

            if (selectedCards.length == 0) {
                // swap first card
                selectedCards.push(this);
            } else if (selectedCards.length == 1) {
                // swap last card
                selectedCards.push(this);

                // Check if both are the same
                setTimeout(function () {
                    if (selectedCards[0].dataset.card == selectedCards[1].dataset.card) {
                        score++;

                        if (score == 4) {
                            endGame();
                        }
                        selectedCards = [];
                    } else {
                        selectedCards[0].querySelector("img").src = "./assets/img/background.png";
                        selectedCards[1].querySelector("img").src = "./assets/img/background.png";
                        selectedCards = [];
                    }
                }, 1000);
            }
        });
    }
}

function endGame() {
    document.body.removeChild(document.querySelector(".js-game"));
    clearInterval(timer);
}