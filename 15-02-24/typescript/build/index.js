"use strict";
const age = 20;
const isCar = true;
const loginDetails = 812345666642;
const issa = "jodokde";
const shoppingItem = ["Dad", "get", "milk", { runaway: true },];
const test = "math";
const num = 12;
let classAct = [];
classAct.push("Milk");
classAct.push("Rice");
classAct.push(2);
classAct.push(false);
console.log(shoppingItem);
console.log(classAct);
function Addition(num1, num2) {
    return num1 + num2;
}
console.log(Addition(20, 30));
function StringAddition(num1, num2) {
    console.log(`${num1}${num2}`);
    return num1.concat(num2);
    // return `${num1}${num2}`
    // return `${num1}${num2}`
}
console.log(StringAddition("Add", "ition"));
const arr = [1, 2, 3, 4, 5, 6];
function sumOfArray(arr) {
    let a = [];
    let y = 0;
    for (let x = 0; x < arr.length; x++) {
        y += arr[x];
        a.push(y);
    }
    let b = arr.reduce((currentTotal, e) => {
        return currentTotal + e;
    }, 0);
    console.log(`B ${b}`);
    return a;
}
console.log(sumOfArray([10, 20, 30, 40, 50]));
const car = {
    oruko: "Camry",
    odun: 1999,
    color: "funfun"
};
console.log(car.color);
