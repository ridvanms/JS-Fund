function operations(numbers) {
    let originalArray = numbers;
    let subArray = [];

    let originalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (originalArray[i] % 2 === 0) {
            subArray[i] = originalArray[i] + i;
        } else {
            subArray[i] = originalArray[i] - i;
        }
        originalSum += originalArray[i];
    }
    console.log(subArray);
    console.log(originalSum);
    // calculating the sum of the subArray;
    let subSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        subSum += subArray[i];
    }
    console.log(subSum)
}
operations([5, 15, 23, 56, 35])