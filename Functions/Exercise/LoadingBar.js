function loadingBar(number) {
  working();
  function working() {
    let signCounts = "%".repeat(number / 10);
    let leftDots = ".".repeat(10 - signCounts.length);

    let result = `${number}% [${signCounts}${leftDots}]`;
    if (signCounts.length != 10) {
      console.log(result);
      console.log("Still loading...");
    } else console.log("100% Complete!");
  }
}
loadingBar(30);
