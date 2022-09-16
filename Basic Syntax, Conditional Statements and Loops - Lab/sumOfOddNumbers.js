function sumOfOddNumbers(value) {
    let number = +value;

    let counting = 0;
    let sum = 0;

    while (number != 0) {
        counting++
        if (counting % 2 !== 0) {
            console.log(counting)
            sum += counting;
            number--;
        }
    }
    console.log(`Sum: ${sum}`)

}
sumOfOddNumbers(3)