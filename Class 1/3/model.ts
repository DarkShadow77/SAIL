interface Product{
    name: string;
    price: number;
    quantity: number
}

//implement a functions for adding products, removing, and calculating total price
//export the interface and functions from the module

//in a sepearte file, import the interface and functionsto demonstrate adding products, removing products and calculating total price

function addToCart(arr:Product[], item: Product){
    return arr.push(item);
}


function removeFromCart(arr:Product[], itemName: string){
    let index:number = 0;

    for (let x = 0; x < arr.length; x++) {
        if((arr[x].name.toLowerCase()) === (itemName.toLowerCase())){
            index = x;
            console.log(index)
        }
    }
    return arr.splice(index, 1);
}


function totalPrice(arr:Product[]){
    let y: number = 0;

    for (let x = 0; x < arr.length; x++) {
        y += arr[x].price;
    }
    return y;
}

export{Product, addToCart, removeFromCart, totalPrice}