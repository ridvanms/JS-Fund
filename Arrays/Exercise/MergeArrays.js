function mergeArrays(arr1, arr2) {
  let arr3 = [];
  let result = "";
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr3.push(+arr1[i] + +arr2[i]);
      result += `${arr3[i]}`;
    } else {
      arr3.push(`${arr1[i]}${arr2[i]}`);
      result += `${arr3[i]}`;
    }
    if (i !== arr1.length - 1) {
      result += " - ";
    }
  }

  console.log(result);
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
