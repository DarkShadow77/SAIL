"use strict";
let body = document.getElementById("body");
let to_do_input = document.getElementById("to_do_input");
let to_do_date = document.getElementById("to_do_date");
let to_do_time = document.getElementById("to_do_time");
let send = document.getElementById("send");
let edit_to_do = document.getElementById("edit");
let delete_to_do = document.getElementById("delete");
let to_do_array = [];
send.addEventListener('click', (e) => {
    if (to_do_input.value.length > 0 && to_do_time.value.length > 0 && to_do_date.value.length > 0) {
        to_do_array.push({ text: to_do_input.value, date: to_do_date.value, time: to_do_time.value });
        to_do_input.value = "";
        to_do_date.value = "";
        to_do_time.value = "";
    }
    console.log(to_do_array);
    displayArray(to_do_array);
});
function displayArray(arr) {
    let x = 0;
    body.innerHTML = ``;
    for (x; x < arr.length; x++) {
        body.innerHTML += `<li>${arr[x].text} <button onclick ="editToDo(${x})" id="edit">Edit</button>
        <button onclick ="deleteToDo(${x})" id="delete">Delete</button> Countdown: <span id="count${x}">0</span></li>`;
        countDown(x);
        console.log(arr[x]);
    }
}
function editToDo(x) {
    let prompts = window.prompt("Edit To-Do,");
    console.log(prompts);
    if (prompts.length > 0) {
        to_do_array.splice(x, 1, { text: prompts, date: to_do_array[x].date, time: to_do_array[x].text });
        to_do_input.value = "";
    }
    displayArray(to_do_array);
}
function deleteToDo(index) {
    to_do_array.splice(index, 1);
    displayArray(to_do_array);
}
function countDown(index) {
    let launchDate = new Date(`${to_do_array[index].date}T${to_do_array[index].time}:00`).getTime();
    let count = document.getElementById(`count${index}`);
    let time = setInterval(function () {
        let currentTime = new Date().getTime();
        let remainingTime = launchDate - currentTime;
        count.textContent = `${remainingTime}`;
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        count.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
        if (remainingTime <= 0) {
            clearInterval(time);
            alert(`It's time for ${to_do_array[index].text}`);
            count.textContent = "Time Up";
        }
    }, 1000);
}
