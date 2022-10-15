function addAndSubtract(numOne, numTwo, numThree) {
  let sum = numOne + numTwo;

  if (!sum) {
    console.log(0);
    return;
  }
  sum -= numThree;
  console.log(sum);
}
addAndSubtract(42);
