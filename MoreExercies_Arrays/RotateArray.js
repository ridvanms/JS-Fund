function rotation(arr) {
  let arrAmount = +arr[arr.length - 1];
  arr.pop();
  for (let i = 0; i < arrAmount; i++) {
    let current = arr.pop();
    arr.unshift(current);
  }
  console.log(arr.join(" "));
}
rotation(["1", "2", "3", "4", "2"]);
