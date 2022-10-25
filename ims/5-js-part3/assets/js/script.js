// 
var finishLine = 500;

// Car 1
var car1 = document.querySelector("#car1");
var startPosCar1 = 0;

car1.addEventListener("click", function () {
    startPosCar1 += 20;

    if ((startPosCar1 + car1.clientWidth) > finishLine) {
        alert("CAR 1 IS THE WINNER");
    }
    car1.style.marginLeft = startPosCar1 + "px";
});

// Car 2
var car2 = document.querySelector("#car2");
var startPosCar2 = 0;

car2.addEventListener("click", function () {
    startPosCar2 += 20;

    if ((startPosCar2 + car2.clientWidth) > finishLine) {
        alert("CAR 2 IS THE WINNER");
    }
    car2.style.marginLeft = startPosCar2 + "px";
});