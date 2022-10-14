// function magicMatrices(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let rowSum = 0;
//     let columnSum = 0;

//     // rows
//     for (let r = 0; r < arr.length; r++) {
//       rowSum += arr[i][r];
//     }
//     //checking  columns
//     for (let a = 0; a < arr.length; a++) {
//       for (let c = 0; c < arr.length; c++) {
//         columnSum += arr[c][a];
//       }
//       if (rowSum !== columnSum) {
//         console.log(false);
//         return;
//       }
//       columnSum = 0;
//     }
//   }
//   console.log(true);
// }
// magicMatrices([
//   [
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1],
//   ],
// ]);
// // row / column  sums
function magicMatrices(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    let sumROne = matrix[i].reduce((a, b) => a + b, 0);
    let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
    let sumCOne = 0;
    let sumCTwo = 0;

    for (let j = 0; j < matrix.length; j++) {
      sumCOne += matrix[i][j];
      sumCTwo += matrix[i + 1][j];
    }

    if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
      return false;
    }
  }
  return true;
}
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
