// 
var selectedCards = [];
var score = 0;
var amountOfClicks = 0;
var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    document.querySelector(".js-timer").innerHTML = seconds;
}, 1000);

// creating cards
createCards();

// add the events to cards
addEventsToCards();

// clicking card 
function addEventsToCards() {
    var cardEls = document.querySelectorAll(".js-card");

    for (var index = 0; index < cardEls.length; index++) {
        cardEls[index].addEventListener("click", function () {
            amountOfClicks++; 
            document.querySelector(".js-amount").innerHTML = amountOfClicks;

            // change the aimge 
            if (selectedCards.length < 2) {
                this.querySelector("img").src = "./assets/img/" + this.dataset.item + ".png";
            }

            if (selectedCards.length == 0) {
                selectedCards.push(this);
            } else if (selectedCards.length == 1) {
                selectedCards.push(this);

                if (selectedCards[0].dataset.item == selectedCards[1].dataset.item) {
                    console.log("we got a match");
                    score++;

                    // end game
                    if (score == 4) {
                        document.body.removeChild(document.querySelector(".js-game"));

                        clearInterval(timer);
                    }
                    selectedCards = [];
                } else {
                    setTimeout(function () {
                        selectedCards[0].querySelector("img").src = "./assets/img/background.png";
                        selectedCards[1].querySelector("img").src = "./assets/img/background.png";
                        console.log("we don't got a match");
                        selectedCards = [];
                    }, 1000);
                }
            }

            console.log(selectedCards);
        });
    }
}

function createCards() {
    // create cards
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

    cards = shuffleCards(cards);

    for (var index = 0; index < cards.length; index++) {
        // creating a card
        var cardEl = document.createElement("div");
        cardEl.classList.add("js-card");
        cardEl.classList.add("c-card");
        cardEl.dataset.item = cards[index];

        // creating the image
        var imgEl = document.createElement("img");
        imgEl.src = "./assets/img/background.png";

        // adding an image to a card
        cardEl.appendChild(imgEl);

        // add the card to my document
        document.querySelector(".js-game").append(cardEl);
    }
}

function shuffleCards(cards) {
    var shuffledCards = [];

    while (cards.length > 0) {
        var randomCard = Math.floor(Math.random() * cards.length);

        shuffledCards.push(cards[randomCard]);

        cards.splice(randomCard, 1);
    }

    return shuffledCards;
}