var bodyEl = document.querySelector("body");
var buttonEls = document.querySelectorAll(".js-button");


for (var i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function () {
        bodyEl.style.backgroundColor = this.dataset.color;
    });
}


// How we can add inline styling
// bodyEl.style.backgroundColor = "Green";
// bodyEl.classList.add("background-green");
// console.log(bodyEl);
var buttonChangeTextEL = document.querySelector(".js-button-change-text");
var titleEl = document.querySelector(".page-title");

buttonChangeTextEL.addEventListener("click", function () {
    titleEl.innerHTML = "OMG I LOVE JB";
    titleEl.setAttribute("data-changed", "true");
});

var buttonDeleteEl = document.querySelector(".js-button-delete");
buttonDeleteEl.addEventListener("click", function () {
    bodyEl.removeChild(titleEl);
});

var buttonAddSmurf = document.querySelector(".js-button-smurf");
buttonAddSmurf.addEventListener("click", function () {
    var smurfElement = document.createElement("div");
    smurfElement.classList.add("smurf");

    document.body.appendChild(smurfElement);
});
