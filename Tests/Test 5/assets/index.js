let timer = document.getElementById("countdown")
let currentTime = 50

let frank = setInterval(function () {


    timer.textContent = `${currentTime}`

    currentTime -= 1
    if(currentTime <= 0){
        clearInterval()
        timer.textContent = `Happy New Year !`
    }
}, 1000)
