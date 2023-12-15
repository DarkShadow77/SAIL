let nums = [45, 32, 90, 56.4, 31];

console.log(nums.splice(2, 1));
console.log(nums);

let frank = {
    hairColor: "Black",
    complexion: "Caramel",
    height: "5.7ft",
    occupation: "Suagr Daddy",
    code: function () {
        console.log("He is coding");

    },
    sleeping: function () {
        console.log("He is Sleeping")
    },
}
console.log(frank.hairColor);
frank.sleeping();


let flashSale = [
    { item: "hollandia evap", price: 2 },
    { item: "chivita", price: 5 },
    { item: "hollandia yoghurt", price: 10 },
    { item: "lexus", price: 1500 }
]

let cheap = flashSale.filter((q) => {
    console.log(q);
    return q.price >= 10
});
console.log(cheap);

let cheaps = flashSale.map((kelly) => {
    return kelly.item
});
console.log(cheaps);

let price = flashSale.map((kelly) => {
    console.log(kelly.price);
    return kelly.price
});

let sum = 0;

for (x = 0; x < flashSale.length; x++) {
    sum += flashSale[x].price;
}
console.log(`Total price is ${sum}`);


let reduce = flashSale.reduce((currentTotal, items) => {
    let f = currentTotal + items.price;
    console.log(f);
    return f;
}, 0);

console.log(reduce);


























