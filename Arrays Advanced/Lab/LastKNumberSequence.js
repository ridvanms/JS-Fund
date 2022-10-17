function lastKNumbers(lenght, k) {

    let sequence = [1];

    for (let i = 0; i < lenght - 1; i++) {
        let index = Math.max(sequence.length - k, 0);

        let lastElement = sequence.slice(index);
        let sum = 0;
        for (const el of lastElement) {
            sum += el
        }
        sequence.push(sum)
    }
    console.log(sequence.join(' '));
}
lastKNumbers(8, 2)