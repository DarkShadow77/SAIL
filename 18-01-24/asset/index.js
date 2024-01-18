let score = prompt("Enter Access Level: ",)
let access = document.getElementById("access")
 console.log(access)

if (score <= 39) {
    let text = "Score: FAIL"
    access.innerHTML = text
    console.log(text)
}else if (score <= 49) {
    let text = "Score: D"
    access.innerHTML = text
    console.log(text)
} else if (score <= 59) {
    let text = "Score: C"
    access.innerHTML = text
    console.log(text)
} else if (score <= 69) {
    let text = "Score: B"
    access.innerHTML = text
    console.log(text)
} else {
    
    let text = "Score: A"
    access.innerHTML = text
    console.log(text)
}

const score2 = [39, 40, 78, 56,8]

for (let x = 0; x < score2.length; x++) {
    console.log(score[x])  
}

let multi = prompt("Enter the multiple Value: ")

for (let x = 0; x < score2.length; x++) {
    let calc = multi * x
    console.log(`${multi} * ${x} = ${calc}`)
}