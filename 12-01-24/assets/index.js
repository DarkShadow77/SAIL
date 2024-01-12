let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let nine = document.getElementById("nine")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let btn = document.getElementById("btn")

btn.addEventListener('click', (e) => {
    e.preventDefault()
    submit()
})

function submit() {
    console.log(one.value)
    console.log(two.value)
    console.log(three.value)
    console.log(four.value)

    nine.textContent = `Name: ${one.value}`
    one.value = ""

    six.textContent = `Email: ${two.value}` 
    two.value = ""

    seven.textContent = `Stack: ${three.value}` 
    three.value = ""

    eight.textContent = `Comments: ${four.value}` 
    four.value = ""

}