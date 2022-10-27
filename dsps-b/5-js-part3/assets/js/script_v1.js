var cars = document.querySelectorAll(".js-car");
var finish = 400;
console.log(cars);

/*
    Ford mustang
*/
var startPos1 = 0;
cars[0].addEventListener("click", function () {
    startPos1 += 20;
    cars[0].style.marginLeft = startPos1 + "px";

    if (startPos1 + 200 > finish) {
        alert("we got a winner!");
    }
});

/*
    Tesla
*/
var startPos2 = 0;
cars[1].addEventListener("click", function () {
    startPos2 += 20;
    cars[1].style.marginLeft = startPos2 + "px";

    if (startPos2 + 200 > finish) {
        alert("we got a winner!");
    }
});
