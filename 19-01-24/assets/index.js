let odd = 0;
let even = 0;

for (let x = 1; x <= 250; x++) {
    if(x % 2 == 1){
        odd += x
    } else{
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