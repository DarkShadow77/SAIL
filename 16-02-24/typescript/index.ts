enum Gender{
    male = "Male",
    female = "female"
}

interface Person {
    name: string,
    age: number,
    gender: Gender,
    pronoun: string,
    religion: string,
}

const ganiyu : Person = {
 name: "Ganiyu",
 age: 18,
 gender: Gender.male,
 pronoun: "she",
 religion: "Christian"
}

function add(n1:number, n2:number, showResult: boolean, text:string){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw new Error("Wrong Input Type")
    }else{
        return n1+n2
    }
}

const number1 = 5;
const number2 = 4;
const showResult = true;
const text = "Your result is: ";

console.log(add(number1, number2, showResult, text));