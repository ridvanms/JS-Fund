function buildWall(arr) {

    let countOfCubics = []
    let oneCubicYard = 1900;
    let done = false;
    while (!done) {
        arr = arr.filter(number => number < 30).map(number => number + 1)
        let arrLength = arr.length
        if (arrLength !== 0) {
            let numberOfCubics = arrLength * 195;
            countOfCubics.push(numberOfCubics)
        }
        done = arrLength !== 0 ? false : true;
    }
    console.log(countOfCubics.join(', '))
    let sumOfCubics = countOfCubics.reduce((a, b) => a + b)
    console.log(`${sumOfCubics * oneCubicYard} pesos`)

}
buildWall([17])