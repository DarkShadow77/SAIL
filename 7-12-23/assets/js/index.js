console.log("Welcome to learning javascript, it is Batch B")

let text = "text";
console.log(text);
text = "shoe";
console.log("Second text", text);

const texts = "strong";
console.log(texts);

let nameOfGirl = "Tracy";
let age = 40;
let myAge = "50";
console.log(age);
console.log(typeof nameOfGirl);
console.log(typeof age);
console.log(typeof myAge);

let word = `I am Great at ${age}`;
let words = `I am Great at ${age * 2}`;
console.log(word);
console.log(words);

let comment = "Lorem's ipsum dolor sit a'met consect'etur, adipisicing elit. Possimus delen'iti aperiam ipsa n'ulla natu's voluptate qui facilis, consectetur eos perspiciatis?";
console.log(comment);
let comment2 = 'Lorem\'s ipsum dolor sit amet consectetur, a"dipisicing elit. Possimu"s deleniti aperiam ipsa null"a natus voluptate qui facilis, consectetur eos perspiciatis?';
console.log(comment2);
let comment3 = `Lorem's ipsum dolor sit amet consectetur, adipisicing elit. Possimus deleniti aperiam ipsa nulla natus voluptate qui facilis, consectetur eos perspiciatis?`;
console.log(comment3);

let a = "hello ";
let b = "world";
let c = a + b
console.log(a + b);
console.log(c);

let q = "idgafwyd"
console.log(q.length);
console.log(q.charAt(4));

let x = "Power";
let y = "Book";

let result = `${5} ${y} is not cool`;
console.log(result);

let aa  = "Volvo" + 2; //Volvo2
let ab  = 3 +"Volvo" + 2; //3Volvo2
let ac  = 3 + 5 + "Volvo"; //8Volvo
let ad  = "Volvo" + 5 + 3; //Volvo53
let ae  = 3 + 5;
let af  = "40";
let ag  = "40.9" * 1;
let res1  = ae + Number(af); //48
let res2  = ae + parseInt(af); //48
let res3  = ae + parseFloat(ag); //48.9
console.log(aa);
console.log(ab);
console.log(ac);
console.log(res1);
console.log(res2);
console.log(res3);


let text1 = comment3.concat("Yooooo", "Yeeeeeep");

let text2 = comment3.endsWith("perspiciatis?");
let text3 = comment3.split("o", 3);
let text4 = comment3.slice(14, 19);

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(comment3.indexOf("o"))

let strA = "David Adeshina Samuel jhr jf ikrk";
let string1 = strA.split(" ");

console.log( strA.slice(2,5));
console.log( strA[4] + strA[2]);

// let strB = prompt("Enter first Number: ");
// let val = strB.indexOf(" ")+1;
// let result2 = strB.slice(val);
// console.log(result2)

let strC = prompt("Enter first Number: ");
let val1 = parseInt(strC);

let strD = prompt("Enter second Number: ");
let val2 = parseInt(strD);
console.log(val1 + val2)
