var carElements = document.querySelectorAll(".js-car");
var finish = 400;
/*
    FORD MUSTANG MACH E
    car 1 needs to listen to a click event
*/
var posCar1 = 0;
carElements[0].addEventListener("click", function () {
    posCar1 += 20;
    carElements[0].style.marginLeft = posCar1 + "px";

    if ((posCar1 + 200) > finish) {
        alert("WE GOT A WINNER");
    }
});

/*
    Tesla
    car 2 needs to listen to a click event
*/
var posCar2 = 0;
carElements[1].addEventListener("click", function () {
    posCar2 += 20;
    carElements[1].style.marginLeft = posCar2 + "px";

    if ((posCar2 + 200) > finish) {
        alert("WE GOT A WINNER");
    }
});