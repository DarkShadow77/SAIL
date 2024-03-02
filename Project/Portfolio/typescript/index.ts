let hover = document.getElementById("hover") as HTMLSpanElement;

function onHover(index:number) {
    console.log(document.querySelector(`#nav :nth-child(${index})`));
    if(index == 3){
        hover.style.left = "700px"
    }
} 