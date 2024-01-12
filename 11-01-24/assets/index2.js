let dollar = window.prompt("Enter Dollar: ")

let value = document.getElementById("naira")

function abokiFx() {
    let change = dollar * 1200
    value.textContent = `Your naira equivalent is ${change}`
}

abokiFx()
