function condense(input) {

    let arrLength = input.length;
    let newArray = input;
    let sum = 0;

    while (newArray.length > 2) {
        for (let i = 0; i < newArray.length - 1; i++) {
            newArray[i] = +newArray[i] + +newArray[i + 1];
        }
        newArray.pop();

    }
    if (input.length > 1) {
        sum = newArray[0] + newArray[1];
    } else {
        sum = +newArray;
    }

    console.log(sum)
}
condense([1])