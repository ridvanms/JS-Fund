function bombNumbers(arrOne, arrTwo) {
    let sequenceOfNumbers = arrOne;
    let specialBombNumber = arrTwo[0];
    let power = arrTwo[1];

    while (sequenceOfNumbers.includes(specialBombNumber)) {
        let index = sequenceOfNumbers.indexOf(specialBombNumber)
        let elementsToRemove = power * 2 + 1;
        let startIndex = index - power; // 3-4 = -1

        if (startIndex < 0) {
            elementsToRemove += startIndex;// 9 + (-1) = 8
            startIndex = 0;
        }
        sequenceOfNumbers.splice(startIndex, elementsToRemove)//...(0,8)
    }

    console.log(sequenceOfNumbers.reduce((a, b) => a + b, 0))
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 4]

)