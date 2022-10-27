// var bodyEls = document.getElementsByTagName("body");
// var bodyEls2 = document.getElementsByClassName("js-body")
// var bodyEl3 = document.getElementById("js-body");
// console.log(bodyEls[0]);
// console.log(bodyEls2[0]);
// console.log(bodyEl3);

// var bodyEl = document.querySelector("body");
// var bodyEl2 = document.querySelector(".js-body");
// var bodyEl3 = document.querySelector("#js-body");
// console.log(bodyEl);
// console.log(bodyEl2);
// console.log(bodyEl3);

// var bodyEls = document.querySelectorAll("body");
// var bodyEls2 = document.querySelectorAll(".js-body");
// console.log(bodyEls);
// console.log(bodyEls2);

// var bodyEl = document.querySelector("body");
// bodyEl.classList.add("body-red");
// bodyEl.styl
var buttonEls = document.querySelectorAll(".js-change-color-button");
var bodyEl = document.querySelector(".js-body");

for (var buttonIndex = 0; buttonIndex < buttonEls.length; buttonIndex++) {
    buttonEls[buttonIndex].addEventListener("click", function () {
        bodyEl.classList.add("body-red");
    });
}