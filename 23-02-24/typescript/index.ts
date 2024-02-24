import {Auth, isCar} from './model'

enum Gender{
    male = 1,
    female =2,
}

interface BatchB {
 age: number,
 height: number,
 religion: string
 gender: Gender,
}


class Student implements BatchB {
    age;
    height: number;
    religion: string;
    gender: Gender;

    constructor(a:number, b:number, c: string, d:Gender){
        this.age = a;
        this.height = b;
        this.religion = c;
        this.gender = d;
    }
}

class Akeko {
    private title: string;
    ojo_ori: number;
    gender: Gender;

    constructor(oruko:string, age:number, gender:Gender){
        this.title = oruko;
        this.ojo_ori = age;
        this.gender = gender;
    }

    printer():string {
        return this.title;
    }

}

const elizabeth = new Akeko("Damisola", 82, Gender.female);

console.log(elizabeth.printer())

class Person extends Akeko {
    race: string;
    // title: string;

    constructor( race: string, oruko: string, age: number, gender: Gender){
        super(oruko, age, gender);
        this.race = race;
        // this.title = title;
    }
}

let p = new Person("black", "yemi", 60, Gender.female);