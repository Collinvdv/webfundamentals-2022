// References 
var btnAddEl = document.querySelector(".btn-add");
var btnSubstractEl = document.querySelector(".btn-substract");

// Add events to our buttons
var counter = 0;

btnAddEl.addEventListener("click", function () {
    counter++;
    changeTheCounter(counter);
});

btnSubstractEl.addEventListener("click", function () {
    counter--;
    changeTheCounter(counter);
});

function changeTheCounter(newResult) {
    var resultEl = document.querySelector(".result");

    resultEl.innerHTML = newResult;
}