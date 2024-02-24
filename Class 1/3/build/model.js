"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalPrice = exports.removeFromCart = exports.addToCart = void 0;
//implement a functions for adding products, removing, and calculating total price
//export the interface and functions from the module
//in a sepearte file, import the interface and functionsto demonstrate adding products, removing products and calculating total price
function addToCart(arr, item) {
    return arr.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(arr, itemName) {
    let index = 0;
    for (let x = 0; x < arr.length; x++) {
        if ((arr[x].name.toLowerCase()) === (itemName.toLowerCase())) {
            index = x;
            console.log(index);
        }
    }
    return arr.splice(index, 1);
}
exports.removeFromCart = removeFromCart;
function totalPrice(arr) {
    let y = 0;
    for (let x = 0; x < arr.length; x++) {
        y += arr[x].price;
    }
    return y;
}
exports.totalPrice = totalPrice;
