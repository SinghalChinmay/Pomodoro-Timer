let currentTime = 1500; // Total seconds in 25 minutes
let stop = false;
let audio = new Audio("../assets/alarm.wav"); // alarm sound

function btn1Disable() {
    btn1.disabled = true;
    btn2.disabled = false;
    btn1.onmouseover = btn1.style.cssText = "cursor: not-allowed;";
    btn2.onmouseover = btn2.style.cssText = "cursor: pointer";
}

function btn2Disable() {
    btn2.disabled = true;
    btn1.disabled = false;
    btn2.onmouseover = btn2.style.cssText = "cursor: not-allowed;";
    btn1.onmouseover = btn1.style.cssText = "cursor: pointer";
}

btn2Disable();

function runTime() {
    if (stop === false) {
        time.innerHTML = `${parseInt(currentTime / 60)}:${(currentTime % 60)}`; // Changes the time continously
        if (currentTime === 0) audio.play();
        if (currentTime !== 0) {
            currentTime--;
            setTimeout(runTime, 1000); // Calls this function again, to update the time.
        }
    }
}

function stopTime() {
    stop = true;
    btn2Disable();
}

function newTime() {
    currentTime = 1500;
    time.innerHTML = "25:00";
    stop = true;
    btn2Disable();
}

// Event listeners

btn1.onclick = () => {
    stop = false;
    btn1Disable();
    runTime();
};

btn2.onclick = stopTime;
btn3.onclick = newTime;

window.addEventListener("keyup", event => {
    if (event.key == "1" && btn1.disabled === false) {
        stop = false;
        btn1Disable();
        runTime();
    }
    else if (event.key == "2" && btn2.disabled === false) stopTime();
    else if (event.key == "3") newTime();
})
