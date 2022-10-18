function listOfProducts(arr) {

    let sortedArray = arr.sort()

    let sortedLength = sortedArray.length;
    for (let i = 1; i <= sortedLength; i++) {
        console.log(`${i}.${sortedArray[i - 1]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])