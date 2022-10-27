var cars = document.querySelectorAll(".js-car");
var finish = 400;

for (var carIndex = 0; carIndex < cars.length; carIndex++) {
    cars[carIndex].addEventListener("click", function () {
        var originalPos = parseInt(window.getComputedStyle(this).marginLeft.replace("px",""));
        originalPos += 20;

        this.style.marginLeft = originalPos + "px";

        if (originalPos + 200 > finish) {
            alert("we got a winner!");
        }
    });
}