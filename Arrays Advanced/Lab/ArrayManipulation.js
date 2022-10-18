function arrManipulation(arr) {

    let arrOfNumbers = arr.shift().split(' ');

    let arrLenght = arr.length;
    for (let i = 0; i < arrLenght; i++) {
        let [command, number, index] = arr[i].split(' ')

        switch (command) {
            case 'Add':
                arrOfNumbers.push(number);
                break;
            case 'Remove':
                arrOfNumbers = arrOfNumbers.filter(num => num !== number)
                break;
            case 'RemoveAt':
                arrOfNumbers.splice(+number, 1)
                break;
            case 'Insert':
                arrOfNumbers.splice(+index, 0, number)
                break;
        }
    }
    console.log(arrOfNumbers.join(' '))
}
arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)

