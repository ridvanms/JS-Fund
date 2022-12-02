function condenseArrayToNumber(arr) {
    while (arr.length > 2) {
        let firstSumming = arr[0] + arr[1];
        let secondSumming = arr[1] + arr[2];
        arr.splice(0, 2, firstSumming)
        arr.splice(1, 1, secondSumming)
    }
    if (arr.length == 1) console.log(arr[0]);
    else console.log(arr[0] + arr[1])
}
condenseArrayToNumber([5, 0, 4, 1, 2]);