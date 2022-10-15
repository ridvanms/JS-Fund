function smallestOfThree(numOne, numTwo, numThree) {
  let smallest = numOne;

  if (numTwo < smallest) smallest = numTwo;
  if (numThree < smallest) smallest = numThree;

  console.log(smallest);
}
smallestOfThree(600, 342, 123);
