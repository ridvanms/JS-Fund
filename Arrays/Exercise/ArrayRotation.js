function rotation(arr, numberOfRotations) {
  for (let i = 0; i < numberOfRotations; i++) {
    arr.push(arr.shift());
  }

  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
