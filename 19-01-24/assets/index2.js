let timer = document.getElementById("time")

let launchDate = new Date("2024-01-20T00:00:00").getTime()
let today = new Date().getTime()
console.log(launchDate)

let frank = setInterval(function () {
    let currentTime = new Date().getTime()
    let remainingTime = launchDate - currentTime

    timer.textContent = remainingTime

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

    timer.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`

    if(remainingTime <= 0){
        clearInterval()
        time.innerHTML = `Your Website is Live Hurray`
    }
}, 1000)

