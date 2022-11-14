function storage(arr) {
    let objOfProducts = {};
    arr.forEach(el => {
        let [name, amount] = el.split(' ');
        if (!objOfProducts.hasOwnProperty(name))
            objOfProducts[name] = +amount
        else objOfProducts[name] += +amount

    })
    for (const key in objOfProducts) {
        console.log(`${key} -> ${objOfProducts[key]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)