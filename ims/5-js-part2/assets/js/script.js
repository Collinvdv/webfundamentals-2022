var buttonEls = document.querySelectorAll(".js-btn-change-color");
var bodyEl = document.querySelector("body");

for (var index = 0; index < buttonEls.length; index++) {
    buttonEls[index].addEventListener("click", function () {
        bodyEl.classList.add("background-green");
    });
}