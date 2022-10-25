// 
var finishLine = 500;

// Race cars
var carEls = document.querySelectorAll(".js-car");
console.log(carEls);

for (var index = 0; index < carEls.length; index++) {
    carEls[index].addEventListener("click", function () {
        var marginLeft = parseInt(getComputedStyle(this).marginLeft.replace("px",""));
        marginLeft += 20;

        this.style.marginLeft = marginLeft + "px";

        if ((marginLeft + this.clientWidth) > finishLine) {
            alert("WE GOT A WINNER");
        }
    });
}
s