// Links to my input
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

// Links to my buttons
var btnAdd = document.querySelector(".btn-add");
var btnMinus = document.querySelector(".btn-minus");
var btnMultiply = document.querySelector(".btn-multiply");
var btnDivide = document.querySelector(".btn-divide");

// Result
var result = document.querySelector(".result");

// Add event listeners
btnAdd.addEventListener("click", function () {
    var output = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = output
});

btnMinus.addEventListener("click", function () {
    var output = parseInt(input1.value) - parseInt(input2.value);
    result.innerHTML = output
});

btnMultiply.addEventListener("click", function () {
    var output = parseInt(input1.value) * parseInt(input2.value);
    result.innerHTML = output
});

btnDivide.addEventListener("click", function () {
    var output = parseInt(input1.value) / parseInt(input2.value);
    result.innerHTML = output
});