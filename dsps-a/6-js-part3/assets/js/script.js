var carElements = document.querySelectorAll(".js-car");
var finish = 400;

/*
    FORD MUSTANG MACH E
    car 1 needs to listen to a click event
*/
for (var carIndex = 0; carIndex < carElements.length; carIndex++) {
    carElements[carIndex].addEventListener("click", function () {
        var posCar = parseInt(window.getComputedStyle(this).marginLeft.replace("px", ""));
        posCar += 20;
        this.style.marginLeft = posCar + "px";

        if ((posCar + 200) > finish) {
            alert("WE GOT A WINNER");
        }
    });
}
