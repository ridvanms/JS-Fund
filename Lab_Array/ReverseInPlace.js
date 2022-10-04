function reverseInPlace(input) {
    let newArray = [];
    let oldArrayLength = input.length;
    let result = ''
    for (let i = 0; i < oldArrayLength; i++) {
        newArray.push(input[oldArrayLength - 1 - i]);
        result += `${newArray[i]} `
    }
    console.log(result)
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])