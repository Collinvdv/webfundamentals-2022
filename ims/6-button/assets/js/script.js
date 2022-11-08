// change color
var buttonEl = document.querySelectorAll(".js-button");
var bodyEl = document.querySelector(".js-body");

for (var index = 0; index < buttonEl.length; index++) {
    buttonEl[index].addEventListener("click", function () {
        bodyEl.style.backgroundColor = this.dataset.bgcolor;
    });
}

// change text
var buttonTextEl = document.querySelector(".js-button-text");

buttonTextEl.innerHTML = "<h2>De tekst is gewijzigd</h2>";
buttonTextEl.setAttribute("href", "https://collinvandervorst.be");

// New elements 
var buttonSmurfEl = document.querySelector(".js-button-add-smurf");
buttonSmurfEl.addEventListener("click", function () {
    var smurfElement = document.createElement("div");
    smurfElement.classList.add("smurf");

    bodyEl.appendChild(smurfElement);
});

document.querySelector("body").removeChild(buttonTextEl);