"use strict";
var Gender;
(function (Gender) {
    Gender["male"] = "Male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
const ganiyu = {
    name: "Ganiyu",
    age: 18,
    gender: Gender.male,
    pronoun: "she",
    religion: "Christian"
};
function add(n1, n2, showResult, text) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Wrong Input Type");
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 4;
const showResult = true;
const text = "Your result is: ";
console.log(add(number1, number2, showResult, text));
