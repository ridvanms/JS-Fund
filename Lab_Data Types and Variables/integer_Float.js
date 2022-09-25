function typeOfSum(firstNumber, secondNumber, therdNumber) {
    // finding the sum 
    let sum = firstNumber + secondNumber + therdNumber;
    // watching if it is Integer or Float
    let result = `${sum} - ${sum % 1 === 0 ? 'Integer' : 'Float'}`;
    // printing the result
    console.log(result)
}
typeOfSum(9, 100, 1);