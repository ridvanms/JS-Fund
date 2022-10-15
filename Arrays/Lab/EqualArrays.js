function equalArray(firstArray, secondArray) {

    let arrLength = firstArray.length;
    let index;
    let sum = 0
    for (let i = 0; i < arrLength; i++) {
        if (firstArray[i] != secondArray[i]) {
            index = i;
            break;
        } else {
            sum += +firstArray[i];
        }
    }
    if (index >= 0) {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}