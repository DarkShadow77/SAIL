let person = prompt("Enter your name")

console.log(person)
// function expression
function greetings(person){
    return `Hey ${person}, how are you?`
}

//function invocation
greetings(person)
console.log(greetings(person))

//function declaration

let a = function(){}
let b = (a, b) => {
    return a + b
}
console.log(b(12, 33))

//Immediately invoked function expression - IIFE
// (function (){
//     //expression
//     console.log("Prints")
// })()

sail()

function fnxn(z) {
    console.log(`Welcome to SAIL ${z}`)
}

function sail() {
    let name = "Damisola"
    fnxn(name)
}

let oru = document.getElementById("oruko")
oru.style.color = "hotpink"


let xcel = document.getElementsByClassName("xcel")
let c = xcel[0]
c.style.color = "beige"

let element = document.createElement("h4")
let show = element.innerHTML = "xcel you don try"
document.body.append(show)