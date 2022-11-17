
var counter = 0;

// ADD Button logic 
var buttonAdd = document.querySelector(".js-btn-add");

buttonAdd.addEventListener("click", function () {
    counter ++;
    changeResult(counter)
});

// Substract Button logic
var buttonSubstract = document.querySelector(".js-btn-substract");

buttonSubstract.addEventListener("click", function () {
    counter--;
    changeResult(counter)
});

function changeResult(newResult) {
    var resultEl = document.querySelector(".js-result");
    resultEl.innerHTML = newResult;
}