class Storage {
    totalCost = 0;
    productList = [];
    constructor(capacity) {
        this.capacity = +capacity
    }
    addProduct(product) {
        let productObj = {
            name: product.name,
            price: Number(product.price),
            quantity: Number(product.quantity),

        }
        if (productObj.name && productObj.price && productObj.quantity)
            this.productList.push(product)

        this.totalCost += Number(product.price) * Number(product.quantity)

        this.capacity -= Number(product.quantity);
    }

    getProducts() {
        let products = [];
        this.productList.forEach(product => {
            products.push(JSON.stringify(product))
        })
        return products.join('\n')
    }
}

let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
let storage = new Storage(30);

storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost)

// let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
// let productTwo = { name: 'Cherry', price: 0.90, quantity: 25 };
// let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);

// let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
// let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);

