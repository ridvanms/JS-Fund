function NxN_Matrix(number) {
  let strColumns = "";
  for (let i = 0; i < number; i++) {
    let strRows = "";
    for (let j = 0; j < number; j++) {
      strRows += `${number} `;
    }
    strColumns += strRows + "\n";
  }
  console.log(strColumns);
}
NxN_Matrix(7);
