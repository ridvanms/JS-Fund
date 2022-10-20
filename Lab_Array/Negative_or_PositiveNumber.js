function negativeOrPositive(input) {
    let numbers = []
    let negatives = 0;
    let positive = 0;

    let lengthOfNumbers = input.length - 1;
    for (let i = 0; i <= lengthOfNumbers; i++) {
        if (+input[i] < 0) {
            numbers.unshift(+input[i])
        } else if (+input[i] >= 0) {
            numbers.push(+input[i])

        }
    }
    for (let i = 0; i <= lengthOfNumbers; i++) {
        console.log(+numbers[i])
    }
}
negativeOrPositive(['3', '-2', '0', '-1'])