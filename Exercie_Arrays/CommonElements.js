function commonElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let result = "";
      if (arr1[i] === arr2[j]) {
        result = arr1[i];
      }
      if (result !== "") {
        console.log(arr1[i]);
      }
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
