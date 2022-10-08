function maxNumber(arr) {
  let result = [];

  while (arr.length !== 0) {
    let [current, bigger] = [arr.shift(), Math.max(...arr)];
    if (current > bigger) {
      result.push(current);
    }
  }
  console.log(result.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);

// function max(arr) {
//   let result = [];
//       while(arr.length !== 0) {
//           let [current, biggest] = [arr.shift(), Math.max(...arr)]
//           if(current > biggest) result.push(current);
//      }
//      return result.join(' ');
//   }
