
let dd = document.getElementById("car");

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    display() {
        let result = `This is a ${this.year}, ${brand} ${model}`;
        dd.textContent = result;
        return result;
    }
}

class Student {
    constructor(name, age) {
        this.ojo_ori = name;
        this.oruko = age;
    }

    display(pronoun) {
        let result = `This is a ${this.oruko}, ${pronoun} ${model}`;
        dd.textContent = result;
        return result;
    }
}

let brand = prompt("Enter the Cars Brand");
let model = prompt("Enter the Cars Model");
let year = prompt("Enter the Cars Year");

const car = new Car(brand, model, year);
console.log(car.display())

class Akeko extends Student {
    constructor(id, dept, name, age) {
        super(name, age);
        this.id = id;
        this.dept = dept;
    }

    identification() {
        console.log(this.ojo_ori)
        // console.log(`Your IdentificTION number is ${this.id}`)
    }
    department() {
        console.log(`Your department is ${this.dept}`)
    }
}

const inherit = new Akeko("080", "Sciences", "Tinuke", 88);
inherit.identification();