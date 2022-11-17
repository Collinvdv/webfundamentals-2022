var bodyEl = document.querySelector("body");
var btnBackgroundEls = document.querySelectorAll(".js-btn-change");


for (var i = 0; i < btnBackgroundEls.length; i++) {
    btnBackgroundEls[i].addEventListener("click", function () {
        bodyEl.style.backgroundColor = this.dataset.color;
    });
}


var btnChangeTitle = document.querySelector(".js-btn-change-title");
var titleEl = document.querySelector(".js-title");

titleEl.setAttribute("id", "page-title");
console.log(btnChangeTitle.parentElement);
btnChangeTitle.addEventListener("click", function () {
    // titleEl.innerHTML = "I hate my life, but i love JS";

    // document.body.removeChild(titleEl);

    var smurfElement = document.createElement("div");
    smurfElement.classList.add("smurf");

    document.querySelector("body").appendChild(smurfElement);
    console.log(smurfElement);
});