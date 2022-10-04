function reversing(number, input) {
    let numberN = number

    let result = ''
    let reversedNumbers = [];
    for (let i = 0; i < number; i++) {
        reversedNumbers.push(+input[number - 1 - i]);
        result += `${reversedNumbers[i]} `
    }
    console.log(result)
}
reversing(3, [10, 20, 30, 40, 50])