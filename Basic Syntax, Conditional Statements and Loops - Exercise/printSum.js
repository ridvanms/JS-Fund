function printSum(startNumber, endNumber) {

    let sum = 0;
    let numbers = '';

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
        numbers += `${i} `;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printSum(5, 10);