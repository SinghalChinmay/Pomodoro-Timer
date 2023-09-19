let currentTime = 1500; // Total seconds in 25 minutes
let intervalID;
let audio = new Audio("../assets/alarm.wav"); // alarm sound

function btn1Disable() {
    btn1.disabled = true;
    btn2.disabled = false;
    btn1.onmouseover = btn1.style.cssText = "cursor: not-allowed;";
    btn2.onmouseover = btn2.style.cssText = "cursor: pointer";
}

function btn1Enable() {
    btn1.disabled = false;
    btn2.disabled = true;
    btn1.onmouseover = btn1.style.cssText = "cursor: pointer";
    btn2.onmouseover = btn2.style.cssText = "cursor: not-allowed;";
}

btn1Enable();

function runTime() {
    intervalID = setInterval(() => {
        time.innerHTML = `${parseInt(currentTime / 60)}:${(currentTime % 60)}`; // Changes the time continuously
        if (currentTime !== 0) {
            currentTime--;
        }
        else {
            btn1.disabled = btn2.disabled = true;
            btn2.onmouseover = btn2.style.cssText = "cursor: not-allowed;";
            btn1.onmouseover = btn1.style.cssText = "cursor: not-allowed";
            audio.play();
        }
    }, 1000)
}

function stopTime() {
    clearInterval(intervalID);
    btn1Enable();
}

function newTime() {
    clearInterval(intervalID);
    currentTime = 1500;
    time.innerHTML = "25:00";
    btn1Enable();
}

// Event listeners

btn1.onclick = () => {
    btn1Disable();
    runTime();
};

btn2.onclick = stopTime;
btn3.onclick = newTime;

window.addEventListener("keyup", event => {
    if (event.key == "a" && btn1.disabled === false) {
        btn1Disable();
        runTime();
    }
    else if (event.key == "b" && btn2.disabled === false) stopTime();
    else if (event.key == "c") newTime();
})
