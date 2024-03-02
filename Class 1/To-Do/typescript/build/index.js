"use strict";
let body = document.getElementById("body");
let to_do_input = document.getElementById("to_do_input");
let send = document.getElementById("send");
let edit_to_do = document.getElementById("edit");
let delete_to_do = document.getElementById("delete");
let to_do_array = [];
send.addEventListener('click', (e) => {
    if (to_do_input.value.length > 0) {
        to_do_array.push({ text: to_do_input.value });
        to_do_input.value = "";
    }
    console.log(to_do_array);
    displayArray(to_do_array);
});
function displayArray(arr) {
    let x = 0;
    body.innerHTML = ``;
    for (x; x < arr.length; x++) {
        body.innerHTML += `
        <li>${arr[x].text} 
            <div id="buttons">
                <button onclick ="editToDo(${x})" id="edit">Edit</button>
                <button onclick ="deleteToDo(${x})" id="delete">Delete</button>
            </div>
        </li>`;
        console.log(arr[x]);
    }
}
function editToDo(x) {
    let prompts = window.prompt("Edit To-Do,");
    console.log(prompts);
    if (prompts.length > 0) {
        to_do_array.splice(x, 1, { text: prompts });
        to_do_input.value = "";
    }
    displayArray(to_do_array);
}
function deleteToDo(index) {
    to_do_array.splice(index, 1);
    displayArray(to_do_array);
}
