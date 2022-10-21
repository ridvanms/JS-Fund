function searchForANumber(arrOne, arrTwo) {

    let taker = arrTwo[0]
    let deletCounter = arrTwo[1];
    let sercher = arrTwo[2];

    let takingSpecificCounts = arrOne.slice(0, taker);
    takingSpecificCounts.splice(0, deletCounter);
    let counter = takingSpecificCounts.filter(number => number === sercher).length;

    console.log(`Number ${sercher} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)