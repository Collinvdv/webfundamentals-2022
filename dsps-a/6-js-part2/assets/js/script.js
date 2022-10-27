// console.log("---- crapy way ----");
// var bodyEls = document.getElementsByTagName("body");
// var bodyElsClasses = document.getElementsByClassName("js-body");
// var bodyElId = document.getElementById("js-body");
// console.log(bodyEls);
// console.log(bodyElsClasses);
// console.log(bodyElId);

// console.log("---- query selector ----");
// var bodyEl2 = document.querySelector("body");
// var bodyElClasses2 = document.querySelector(".js-body");
// var bodyElId2 = document.querySelector("#js-body");
// console.log(bodyEl2);
// console.log(bodyElClasses2);
// console.log(bodyElId2);

// console.log("---- query selector all ----");
// var bodyEls2 = document.querySelectorAll("body");
// var bodyElsClasses2 = document.querySelectorAll(".js-body");
// var bodyElsId2 = document.querySelectorAll("#js-body");
// console.log(bodyEls2);
// console.log(bodyElsClasses2);
// console.log(bodyElsId2);

var bodyEl = document.querySelector(".js-body");

//bodyEl.style.backgroundColor = "green";
// bodyEl.classList.add("body-green");

var buttonEls = document.querySelectorAll(".js-change-color-button");

for (var buttonIndex = 0; buttonIndex < buttonEls.length; buttonIndex++) {
    buttonEls[buttonIndex].addEventListener("click", function() {
        bodyEl.classList.add("body-green");
    });
}
