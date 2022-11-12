// class Storage {

//     constructor(capacity) {
//         this.capacity = +capacity
//         this.productList = [];
//     }
//     get totalCost() {
//         return this.productList.reduce((i, el) => { return i + el.price * el.quantity }, 0);
//     }

//     addProduct(product) {
//         this.productList.push(product)
//         this.capacity -= Number(product.quantity);
//         return;
//     }

//     getProducts() {
//         let products = [];
//         this.productList.forEach(product => {
//             products.push(JSON.stringify(product))
//         })
//         return products.join('\n')
//     }
// }



class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        return this.storage.reduce((acc, el) => { return acc + el.price * el.quantity }, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
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

