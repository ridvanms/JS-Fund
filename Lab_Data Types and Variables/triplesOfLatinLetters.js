function triples(number) {
  // to be sure it is type of Number
  let numb = +number;

  // creating nested Loops
  for (let a = 0; a < number; a++) {
    let letter = "";
    for (let b = 0; b < number; b++) {
      for (let c = 0; c < number; c++) {
        letter = `${String.fromCharCode(97 + a)}${String.fromCharCode(
          97 + b
        )}${String.fromCharCode(97 + c)}`;
        console.log(letter);
      }
    }
  }
}
triples(3);
