function primeNumber(number) {
  let isPrime = false;
  if (number % 2 !== 0 && number % 3 !== 0) {
    isPrime = true;
  }
  console.log(isPrime);
}
primeNumber(81);
