let timer;
let elapsedTime = 0;
let running = false;
let lapCounter = 1;

function startStopwatch() {
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    running = false;
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    lapCounter = 1;
    updateDisplay();
    document.getElementById("lapTimes").innerHTML = "";
}

function lapStopwatch() {
    if (running) {
        let lapTime = elapsedTime;
        let hours = Math.floor(lapTime / 3600000);
        let minutes = Math.floor((lapTime % 3600000) / 60000);
        let seconds = Math.floor((lapTime % 60000) / 1000);
        let milliseconds = Math.floor((lapTime % 1000) / 10);
        let lapDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
        
        // Add lap time to lapTimes div
        let lapDiv = document.getElementById("lapTimes");
        let lapItem = document.createElement("p");
        lapItem.textContent = `Lap ${lapCounter}: ${lapDisplay}`;
        lapDiv.appendChild(lapItem);
        
        lapCounter++;
    }
}

function updateDisplay() {
    let totalMilliseconds = elapsedTime;
    let hours = Math.floor(totalMilliseconds / 3600000);
    let minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    let seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    let milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
    document.getElementById("display").textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}