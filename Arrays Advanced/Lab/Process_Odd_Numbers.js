function processOddNumbers(arr) {

    let oddNumbers = arr.filter((number, index) => index % 2 !== 0).map(number => number * 2).reverse();

    console.log(oddNumbers.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])