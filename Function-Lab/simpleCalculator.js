function simpleCalculator(firstNumber, secondNumber, operation) {
  let result = 0;
  switch (operation) {
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
  }
  console.log(result);
}
simpleCalculator(40, 8, "divide");
