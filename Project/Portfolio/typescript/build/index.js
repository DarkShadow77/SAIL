"use strict";
let hover = document.getElementById("hover");
function onHover(index) {
    console.log(document.querySelector(`#nav :nth-child(${index})`));
    if (index == 3) {
        hover.style.left = "700px";
    }
}
