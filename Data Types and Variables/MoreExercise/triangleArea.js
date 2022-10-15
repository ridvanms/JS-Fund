function triangle(a, b, c) {
  let semiperimeter = (a + b + c) / 2;
  let area = Math.sqrt(
    semiperimeter *
      (semiperimeter - a) *
      (semiperimeter - b) *
      (semiperimeter - c)
  );
  console.log(area);
}
triangle(2, 3.5, 4);
