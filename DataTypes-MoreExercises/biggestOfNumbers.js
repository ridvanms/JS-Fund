function biggestNumber(firstNumber, secondNumber, therdNumber) {
  let number = firstNumber;
  if (secondNumber > number) {
    number = secondNumber;
  } else if (therdNumber > number) {
    number = therdNumber;
  }
  console.log(number);
}
biggestNumber(-2, 7, 3);
