var path = require('path');
var options = 
  {
    title: "Basic Notification",
    body: "Short message part"
  };

var percentageTicker = 0;
var secondTicker = 0;
var percentageTickAmount = 0;
var max = 60 * 60;

var progressBar = document.getElementById("timerProgress");
var minutesInput = document.getElementById("inputMinutes");

function notify() {
    new Notification(options.title, options);
    timeChanged();
}

function timeChanged(){
    percentageTicker = 0;
    secondTicker = 0;
    max = parseInt(minutesInput.value) * 60;
    percentageTickAmount = 100 / max;

    if(isNaN(max)){
        return;
    }

    updateProgressBar();
}

function updateSecond(){
    percentageTicker += percentageTickAmount;
    ++secondTicker;

    if(percentageTicker > 100){
        notify();
    }
    else{
        updateProgressBar();
    }
}

function updateProgressBar(){
    progressBar.setAttribute("aria-valuenow", percentageTicker);
    progressBar.style.width = percentageTicker + "%";
}

//Set the timer going for every second.
setInterval(updateSecond, 1000);