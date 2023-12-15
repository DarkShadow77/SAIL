
let countries = ["Nigeria", "Uganda", "Kenya", "Gambia", "Mali", "Madagasca", "Ghana"];


let includesG = countries.filter((q) => {
    return q.includes("g") || q.includes("G");
});
console.log(includesG);


let includesG2 = countries.filter((q) => {
    let x = q.toUpperCase();
    return x.includes("G");
});
console.log(includesG2);


let numVal = [23, 76, 45, 70, 454, 567, 98, 34, 20, 256];
let evenVal = [];

let even = numVal.filter((q) => {

    return q % 2 == 0
});
console.log(even);


let total = numVal.reduce((currentTotal, items) => {
    let f = currentTotal + items;
    return f;
}, 0);
console.log(`Total ${total}`)

for (i = 0; i < numVal.length; i++) {
    if (numVal[i] % 2 == 0) {
        evenVal.push(numVal[i])
    }
}

console.log(evenVal);

let b = "Hello World"
let c = b.split("");
console.log(b[2]);
console.log(c);

let prompt1 = prompt("Enter two values seperated by a comma: " );
console.log(prompt1)
let index = prompt1.indexOf(",");
let number1 = prompt1.slice(0,index);
console.log(number1)
let number2 = prompt1.slice(index + 1);
console.log(number2)

let total2 = Number(number1) +  Number(number2)
console.log(total2);

let a = [1,2,3,4,5,6,7,8,9]

a.forEach(function (yungdu) {
    console.log(yungdu);
})




// let a = document.getElementById("text");
// console.log(a);

// document.getElementById("text").onclick(() => {
//     change();
// });

// function change() {
//     document.getElementById("text").append(" Batch B")
// };