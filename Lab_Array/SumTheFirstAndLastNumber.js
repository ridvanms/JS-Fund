function firstAndLast(input) {
    let fNumber = +input[0]
    let lastNumber = +input[input.length - 1];

    let sum = fNumber + lastNumber;
    console.log(sum)
}
firstAndLast([20, 30, 40])