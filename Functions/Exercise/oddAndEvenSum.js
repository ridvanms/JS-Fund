function oddAndEven(number) {
  let oddSum = 0;
  let evenSum = 0;

  let numAsString = number.toString();
  let numLength = numAsString.length;

  for (let i = 0; i < numLength; i++) {
    let currentEl = numAsString[i];
    if (+currentEl % 2 === 0) {
      evenSum += +currentEl;
    } else {
      oddSum += +currentEl;
    }
  }
  let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  console.log(result);
}
oddAndEven(3495892137259234);
