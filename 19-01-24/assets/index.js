let odd = 0;
let even = 0;

for (let x = 1; x <= 250; x++) {
    if (x % 2 == 1) {
        odd += x
    } else {
        even += x
    }

}

document.getElementById("even").textContent = `Even Total: ${even}`
document.getElementById("odd").textContent = `Odd Total: ${odd}`
console.log(`Even Total: ${even}`);
console.log(`Odd Total: ${odd}`);

let names = ["Tooluth", "Bukola", "Otaiku", "Lizzy", "Isaiah"]

for (const preach of names) {
    console.log(preach)

}
let car = {
    nanufacturer: ["Volvo", "Alfa Romeo", "Hyundai"],
    color: "Black",
    trims: ["XLE", "Limited Edition"],
    type: ["Sedan", "CrossOver", "SUV"],

}

for (const c in car) {
    console.log(c)
}

for (const c of Object.entries(car)[0]) {
    console.log(c[2])
}

let smoker = 5;
let age = 18;

let smoke = (smoker < age) ? console.log("Try Paper") : (smaoker > age) ? console.log("Weed Level") : console.log("On Colos");


let time = prompt("What is the Time (24 Hours Format): ")

function greeting(time) {
    let hour = time.slice(0,2)
    console.log(hour)
    let greet = (hour >= 0 && hour < 12 || hour == 24) ? "Good Morning" : 
                (hour >= 12 && hour < 17) ? "Good Afternoon" : 
                (hour >= 17 && hour < 24) ? "Good Evening" : 
                "Input the right time";

    document.getElementById("time").textContent = greet;
    console.log(greet)
}

greeting(time)