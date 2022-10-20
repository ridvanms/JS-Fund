function firstAndLast(arr) {
    let numberK = arr.shift();

    let arrLenght = arr.length;

    let firstKElements = arr.slice(0, numberK)
    let lastKElements = arr.slice(arrLenght - numberK, arrLenght)

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
firstAndLast([3, 6, 7, 8, 9])
firstAndLast([2,
    7, 8, 9]
)