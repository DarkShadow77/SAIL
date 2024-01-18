let access = document.getElementById("multi")

let multi = prompt("Enter the multiple Value: ")

for (let x = 1; x <= 12; x++) {
    let calc = Number(multi) * x
    let result = (`${Number(multi)} * ${x} = ${calc}`)
    console.log(result)
    access.innerHTML += `<h1>${result}</h1>`
}

for (let x = 50; x <= 150; x++) {

    if (x % 2 == 1) {
        console.log(x)
    } else {
        console.log("Even Number")
    }
}


let number = prompt("Enter the multiple Value: ")
let number1 = number.split(" ")
console.log(number1)

for (let x = Number(number1[0]); x <= Number(number1[1]); x++) {

        console.log(x)
}
