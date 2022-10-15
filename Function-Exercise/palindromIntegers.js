function palindromIntegers(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let nonReversed = arr[i];
    let reversed = +arr[i].toString().split("").reverse().join("");

    if (nonReversed === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromIntegers([32, 2, 232, 1010]);
