// add 10 circle
for (var index = 0; index < 10; index++) {
    addFlag(index);
}

// when click on flag remove the flag 
var flags = document.querySelectorAll(".flag");

for (var index = 0; index < 10; index++) {
    flags[index].addEventListener("click", function () {
        console.log(this);
        document.querySelector(".js-flags").removeChild(this);
    });
}


function addFlag(number) {
    var flagEl = document.createElement("div");
    flagEl.classList.add("flag");

    var circleEl = document.createElement("div");
    circleEl.classList.add("circle");
    circleEl.innerHTML = number;

    flagEl.appendChild(circleEl);

    document.querySelector(".js-flags").appendChild(flagEl);
}