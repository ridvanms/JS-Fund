function perfectNumber(number) {
  let sumOfNumbers = 0;

  for (let i = number - 1; i > 0; i--) {
    sumOfNumbers += number % i === 0 ? i : 0;
  }
  if (sumOfNumbers === number) console.log("We have a perfect number!");
  else console.log("It's not so perfect.");
}
perfectNumber(6);
