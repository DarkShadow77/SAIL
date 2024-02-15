const age: number = 20
const isCar: boolean = true
const loginDetails: string | number = 812345666642
const issa = "jodokde"
const shoppingItem = ["Dad", "get", "milk", { runaway: true },]
const test: string = "math"
const num: number = 12

let classAct: (string | number | boolean)[] = []

classAct.push("Milk")
classAct.push("Rice")
classAct.push(2)
classAct.push(false)
console.log(shoppingItem)
console.log(classAct)


function Addition(num1: number, num2: number): number {
    return num1 + num2
}

console.log(Addition(20, 30))


function StringAddition(num1: string, num2: string): string {
    console.log(`${num1}${num2}`)
    return num1.concat(num2)
    // return `${num1}${num2}`
    // return `${num1}${num2}`
}

console.log(StringAddition("Add", "ition"))

const arr: number[] = [1, 2, 3, 4, 5, 6]

function sumOfArray(arr: number[]): number[] {
    let a: number[] = []
    let y: number = 0;

    for (let x = 0; x < arr.length; x++) {
        y += arr[x];
        a.push(y);
    }
    let b = arr.reduce((currentTotal, e) => {
        return currentTotal + e
    }, 0)

    console.log(`B ${b}`)
    return a
}

console.log(sumOfArray([10, 20, 30, 40, 50]));

interface isCar {
    oruko: string, 
    year: number, 
    driving: true, 
    color: string, 
    power?: string|number,
}

const car: isCar = {
    oruko: "Camry",
    year: 1999,
    driving: true,
    color: "funfun",
    power: 65
}

console.log(car.color)

const temi = (oruko:string):string => {
    return `My name is ${oruko}`;
}

const sule = (a:number, b : number, c:(oruko: string)=> string) => {
    let sum = a+b;
    
    return c("Temi");
}

sule(5,10,temi)