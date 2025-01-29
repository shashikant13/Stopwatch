let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function updateDisplay() {
    hoursDisplay.textContent = hours.toString().padStart(2, "0");
    minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

startStopButton.addEventListener("click", () => {
    if (!isRunning) {
        startStopwatch();
        startStopButton.textContent = "Stop";
    } else {
        clearInterval(timer);
        startStopButton.textContent = "Start";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startStopButton.textContent = "Start";
    isRunning = false;
});
