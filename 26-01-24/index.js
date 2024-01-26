class Person {

    // hobbies =[];
    static noOfPerson = 0;
    constructor (name, age, gender, hobbies = []) {
        this.name = name; 
        this.age = age;
        this.gender = gender;
        this._hobbies = hobbies;
        this.no = Person.noOfPerson += 1;
    }

    static desc(){
        return `I have ${Person.noOfPerson}, friend(s)`
    }

    //Get is a keyword that binds an object property to it's function
    
    get getHobbies(){
        return `${this._hobbies} ttg`
    }
 getHobbie(){
        return `${this._hobbies} rgr`
    }
    set setHobbies(hobby){
        return this._hobbies.push(hobby)
    }
}

let person1 = new Person("Lizzy", 12, "Female");
let person2 = new Person("Dominion", 60, "Male");
let person3 = new Person("Dominion", 60, "Male");

console.log(person1.no);
console.log(person1);
person1.setHobbies = "Cyclist";
person1.setHobbies = "Rioting";
console.log(person1.setHobbies);

console.log(person1.getHobbies);
console.log(Person.desc());

let b = person1.getHobbies
console.log(b)

let result = document.getElementById("dashboard");

class Car{
    constructor(power){
        this._fuel = 35;
        this._power = power;
    }

    get power(){
        return `${this.power} hp`;
    }

    get fuel(){
        result.textContent = `(${this._fuel})L, Tank-Level = ${((this._fuel/70) * 100).toFixed(2)}%`;
    }

    set setpower(power){
        return this._power = power;
    }

    
    set setfuel(fuel){
        if(fuel < 0){
            fuel = 0
        }else if(fuel > 70){
            fuel = 70
        }
        return this._fuel = fuel;
    }
}

let car1 = new Car(300);
let input = prompt("Enter Fuel Litre")
car1.setfuel = Number(input);
car1.setfuel;
console.log(car1.fuel);