interface arrObj {
    text: string;
    time: string;
}

let body = document.getElementById("body") as HTMLHtmlElement;
let to_do_input = document.getElementById("to_do_input") as HTMLInputElement;
let to_do_time = document.getElementById("to_do_time") as HTMLInputElement;
let send = document.getElementById("send") as HTMLInputElement;
let edit_to_do = document.getElementById("edit") as HTMLInputElement;
let delete_to_do = document.getElementById("delete") as HTMLInputElement;

let to_do_array: arrObj[] = [];

send.addEventListener('click', (e) => {


    if (to_do_input.value.length > 0 && to_do_time.value.length > 0) {
        to_do_array.push({ text: to_do_input.value, time: to_do_time.value})
        to_do_input.value = ""
        to_do_time.value = ""
    }

    console.log(to_do_array)

    displayArray(to_do_array);
})

function displayArray(arr: arrObj[]) {
    let x: number = 0;
    body.innerHTML = ``
    for (x; x < arr.length; x++) {
        body.innerHTML += `<li>${arr[x].text} <button onclick ="editToDo(${x})" id="edit">Edit</button>
        <button onclick ="deleteToDo(${x})" id="delete">Delete</button> Countdown: <span id="count${x}">0</span></li>`
        countDown(x);
    }
}

function editToDo(x: number) {
    let prompts: string = window.prompt("Edit To-Do,")!
    console.log(prompts)
    if (prompts.length > 0) {
        to_do_array.splice(x, 1, {text: prompts, time:to_do_array[x].text });
        to_do_input.value = ""
    }
    displayArray(to_do_array);
}

function deleteToDo(index: number) {
    to_do_array.splice(index, 1);

    displayArray(to_do_array);
}

function countDown(index: number) {
    let launchDate = new Date(`2024-02-29T${to_do_array[index].time}:00`).getTime();
    let count = document.getElementById(`count${index}`) as HTMLHtmlElement

    let time = setInterval(function () {
        let currentTime = new Date().getTime()
        let remainingTime = launchDate - currentTime
    
        count.textContent = `${remainingTime}`
    
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
    
        count.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`
    
        if(remainingTime <= 0){
            clearInterval(time)
            alert(`It's time for ${to_do_array[index].text}`);
            count.textContent = "0"
        }
    }, 1000)
}
