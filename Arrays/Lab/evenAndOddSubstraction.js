function substracting(input) {

    let arrayLength = input.length;
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (input[i] % 2 === 0) {
            evenNumbers += +input[i]
        } else {
            oddNumbers += +input[i]
        }
    }
    console.log(evenNumbers - oddNumbers)
}
