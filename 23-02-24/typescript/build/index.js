"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender || (Gender = {}));
class Student {
    constructor(a, b, c, d) {
        this.age = a;
        this.height = b;
        this.religion = c;
        this.gender = d;
    }
}
class Akeko {
    constructor(oruko, age, gender) {
        this.title = oruko;
        this.ojo_ori = age;
        this.gender = gender;
    }
    printer() {
        return this.title;
    }
}
const elizabeth = new Akeko("Damisola", 82, Gender.female);
console.log(elizabeth.printer());
class Person extends Akeko {
    // title: string;
    constructor(race, oruko, age, gender) {
        super(oruko, age, gender);
        this.race = race;
        // this.title = title;
    }
}
let p = new Person("black", "yemi", 60, Gender.female);
