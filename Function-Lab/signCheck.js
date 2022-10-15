function signCheck(numOne, numTwo, numThree) {
  let negativeCounts = 0;

  if (numOne < 0) negativeCounts++;
  if (numTwo < 0) negativeCounts++;
  if (numThree < 0) negativeCounts++;

  if (negativeCounts % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(-6, -12, 14);
