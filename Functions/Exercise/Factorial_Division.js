function factorialDivision(numOne, numTwo) {
  function factorial(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }

  return (factorial(numOne) / factorial(numTwo)).toFixed(2);
}
factorialDivision(5, 2);
