function maxSequence(arr) {
  let longestSequence = [];

  for (let i = 0; i < arr.length; i++) {
    currentEl = arr[i];
    let currentSequence = [currentEl];

    for (let j = i + 1; j < arr.length; j++) {
      let nextEl = arr[j];
      if (nextEl === currentEl) {
        currentSequence.push(nextEl);
      } else break;
    }
    if (currentSequence.length > longestSequence.length) {
      longestSequence = [];
      for (let k = 0; k < currentSequence.length; k++) {
        longestSequence.push(currentSequence[k]);
      }
    }
  }
  console.log(longestSequence.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

// function maxSequence(arr) {
//   let longestSequence = [];

//   for (let i = 0; i < arr.length; i++) {
//     currentEl = arr[i];
//     let currentSequence = [currentEl];

//     for (let j = i + 1; j < arr.length; j++) {
//       let nextEl = arr[j];

//       if (nextEl === currentEl) {
//         currentSequence.push(nextEl);
//       } else {
//         break;
//       }
//     }

//     if (currentSequence.length > longestSequence.length) {
//       longestSequence = [];
//       for (let j = 0; j < currentSequence.length; j++) {
//         longestSequence.push(currentSequence[j]);
//       }
//     }
//   }
//   console.log(longestSequence.join(" "));
// }
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
