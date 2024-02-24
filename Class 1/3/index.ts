import {Product, addToCart, removeFromCart, totalPrice} from "./model"

let b: Product[] = [];

addToCart(b,  {name: "name", price: 300,  quantity: 3});
addToCart(b,  {name: "Spag", price: 500,  quantity: 4});
addToCart(b,  {name: "Iphone 16", price: 10000,  quantity: 1});
addToCart(b,  {name: "Alienware m15", price: 100000,  quantity: 1});
console.log(b);

removeFromCart(b, "spagetti");
console.log(b);

console.log(totalPrice(b));
