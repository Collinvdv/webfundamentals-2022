//  Initial data
var pickedCards = [];
var score = 0;
var amountOfClicks = 0;

var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    document.querySelector(".js-timer").innerHTML = seconds;
}, 1000);

// cards aanmaken
createCards();

//een event aan de cards meegeven
addEventsToCards();

function addEventsToCards() {
    var cardsEls = document.querySelectorAll(".js-card");

    for (var index = 0; index < cardsEls.length; index++) {
        cardsEls[index].addEventListener("click", function () {
            // geklikt
            amountOfClicks++;
            document.querySelector(".js-amount").innerHTML = amountOfClicks;

            // card logic
            this.querySelector("img").src = "./assets/img/" + this.dataset.id + ".png";

            if (pickedCards.length == 0) {
                pickedCards.push(this);
            } else if (pickedCards.length == 1) {
                pickedCards.push(this);

                // Ik heb 2 kaartjes eens kijken of die hetzelfde zijn 
                if (pickedCards[0].dataset.id == pickedCards[1].dataset.id) {
                    score++; 

                    if (score == 4) {
                        clearInterval(timer);

                        document.body.removeChild(document.querySelector(".js-game"));
                        alert("finish game");
                    }

                    pickedCards = [];
                } else {
                    setTimeout(function () {
                        console.log(pickedCards);
                        pickedCards[0].querySelector("img").src = "./assets/img/background.png";
                        pickedCards[1].querySelector("img").src = "./assets/img/background.png";

                        pickedCards = [];
                    }, 1000);
                }
            }

            console.log(pickedCards);
        });
    }
}

function createCards() {
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

    // random 
    var randomCards = [];

    while (cards.length > 0) {
        var randomCard = Math.floor(Math.random() * cards.length);

        randomCards.push(cards[randomCard]);
        cards.splice(randomCard, 1);
    }

    console.log(randomCards);

    cards = randomCards;

    // create
    for (var index = 0; index < cards.length; index++) {
        var cardEl = document.createElement("div");
        cardEl.className = "js-card c-card";
        cardEl.dataset.id = cards[index];

        var imgEl = document.createElement("img");
        imgEl.src = "./assets/img/background.png";

        cardEl.appendChild(imgEl);

        document.querySelector(".js-game").appendChild(cardEl);
    }
}
