
let dd = document.getElementById("car");


// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     display() {
//         let result = `This is a ${this.year}, ${brand} ${model}`;
//         dd.textContent = result;
//         return result;
//     }
// }

class Student {
    constructor(name, age) {
        this.ojo_ori = name;
        this.oruko = age;
    }

    display(pronoun) {
        let result = `This is ${this.ojo_ori}, ${pronoun} is a studet`;
        dd.textContent = result;
        return result;
    }
}

// let brand = prompt("Enter the Cars Brand");
// let model = prompt("Enter the Cars Model");
// let year = prompt("Enter the Cars Year");

// const car = new Car("Mec Benz", "model", "220");

// car.display();

// console.log(car.display())

// new Car();

class Akeko extends Student {
    constructor(id, dept, name, age) {
        super(name, age);
        this.id = id;
        this.dept = dept;
    }

    identification() {
        console.log(`Name of Student is ${this.ojo_ori} and identification number is ${this.id}`)
        // console.log(`Your IdentificTION number is ${this.id}`)
    }



    department() {
        console.log(`Your department is ${this.dept}`)
    }
}

let student = [
    {name: "Person1", department: "Sciences1", id: 0, age: 4},
    {name: "Person2", department: "Sciences2", id: 1, age: 5},
    {name: "Person3", department: "Sciences3", id: 2, age: 6},
    {name: "Person4", department: "Sciences4", id: 3, age: 7},
    {name: "Person5", department: "Sciences5", id: 4, age: 8},
    {name: "Person6", department: "Sciences6", id: 5, age: 9}
]

const person1 = new Akeko(student[0].id, student[0].department, student[0].name, student[0].age);
const person2 = new Akeko(student[1].id, student[2].department, student[3].name, student[4].age);
// const person2 = new Akeko("080", "Sciences", "Tinuke", 88);
person1.identification();

console.log(person1.display("HE"));