function amazingNumber(number) {
    // transforming number to string
    let numAsString = `${number}`

    // Finding the sum of the numbers
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += +numAsString[i];
    }
    // transforming sum to string to be abel to find if there is 9
    let sumAsString = sum.toString();
    let result = false
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] === '9') {
            result = true
            break;
        }
    }
    console.log(`${number} Amazing? ${result ? "True" : "False"}`)

}
amazingNumber('9999')