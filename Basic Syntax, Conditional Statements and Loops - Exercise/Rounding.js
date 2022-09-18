function rounding(firstNumber, secondNumber) {
    console.log(`${parseFloat(firstNumber.toFixed(secondNumber <= 15 ? secondNumber : 15))}`)
}
rounding(3.1450000, 5)