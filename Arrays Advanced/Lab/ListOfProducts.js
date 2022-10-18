function listOfProducts(arr) {

    let sortedArray = arr.sort((a, b) => a - b).reverse()
    console.log(sortedArray);
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])