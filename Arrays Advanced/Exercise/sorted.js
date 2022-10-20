function sorting(arr) {

    let newArr = [];
    newArr = arr.sort((a, b) => a - b)

    let arrLenght = arr.length
    let sortedArray = [];
    for (let i = 0; i < arrLenght; i++) {

        let biggerNumber = newArr.pop();
        sortedArray.push(biggerNumber)
        let smallerNumber = newArr.shift();
        sortedArray.push(smallerNumber)

    }
    console.log(sortedArray.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]
)