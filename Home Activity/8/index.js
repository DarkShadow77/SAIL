let hour = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");

let hourV = 0;
let minutesV = 0;
let secondsV = 0;


pause.style.display = "none"
stop.style.display = "none"

start.addEventListener("click", () => {
    let startTime = setInterval(function () {
        start.style.display = "none"
        pause.style.display = ""
        stop.style.display = ""

        secondsV += 1
        seconds.textContent = secondsV;

        if (secondsV == 10) {
            secondsV = 0;
            minutesV += 1
            minutes.textContent = minutesV;
        }else if (minutesV == 10) {
            minutesV = 0;
            hourV += 1
            hour.textContent = hourV;
        }

    }, 1000)
    pause.addEventListener("click", () => {

        pause.style.display = "none"
        clearInterval(startTime)
        start.style.display = ""
        start.textContent = "RESUME"

    })
    stop.addEventListener("click", () => {

        secondsV = 0;
        minutesV = 0;
        hourV = 0;

        clearInterval(startTime)
        
        start.textContent = "START"
        
        start.style.display = ""
        pause.style.display = "none"
        stop.style.display = "none"

        seconds.textContent = secondsV;
        minutes.textContent = minutesV;
        hour.textContent = hourV;
    })
})





