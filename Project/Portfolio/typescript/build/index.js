"use strict";
let hover = document.getElementById("hover");
function onHover(index) {
    console.log(document.querySelector(`#nav :nth-child(${index})`));
    if (index == 1) {
        hover.style.left = "630px";
    }
    if (index == 2) {
        hover.style.left = "740px";
    }
    if (index == 3) {
        hover.style.left = "840px";
    }
    if (index == 4) {
        hover.style.left = "950px";
    }
    if (index == 5) {
        hover.style.left = "1080px";
    }
}
function onHoverOut() {
    hover.style.left = "630px";
}
