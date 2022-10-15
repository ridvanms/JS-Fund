function calculator(firstNumber, Operator, secondNumber) {
    let result = 0
    switch (Operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
    }
    console.log(result.toFixed(2))
}