// references 
var secondsEl = document.querySelector(".seconds");
var btnStartEl = document.querySelector(".button-start");
var btnStopEl = document.querySelector(".button-stop");

// event listener
var stopwatch;
var seconds = 0;

btnStartEl.addEventListener("click", function () {
    // start with 0 
    seconds = 0;
    secondsEl.innerHTML = seconds;

    //
    stopwatch = setInterval(function () {
        seconds++;
        secondsEl.innerHTML = seconds;

        if (seconds > 15) {
            // change the background color of body 
            document.querySelector("body").style.backgroundColor = "red";
        }
    }, 1000);
});

btnStopEl.addEventListener("click", function () {
    clearInterval(stopwatch);
});
