function NthElements(input) {
    let lastElement = input.pop();
    let arrayLength = input.length;

    let text = '';
    for (let i = 0; i < arrayLength; i++) {
        if (i % lastElement === 0) {
            text += `${input[i]} `
        }
    }
    console.log(text)
}
NthElements(['1', '2', '3', '4', '5', '6'])
