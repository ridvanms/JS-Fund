function specialNumber(number) {
  for (let i = 1; i <= number; i++) {
    let digit = i.toString();
    let sum = 0;
    for (let d = 0; d < digit.length; d++) {
      sum += +digit[d];
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumber(15);
