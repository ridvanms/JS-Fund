function positiveOrNegative(arr) {
    let sortedNumber = []
    let arrLenght = arr.length;
    for (let i = 0; i < arrLenght; i++) {
        let number = +arr[i]
        if (number < 0) {
            sortedNumber.unshift(number)
        } else {
            sortedNumber.push(number)
        }
    }
    for (const number of sortedNumber) {
        console.log(number);
    }
}
positiveOrNegative(['7', '-2', '8', '9'])