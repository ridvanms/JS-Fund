function train(arr) {

    let wagons = arr.shift().split(' ').map(Number)
    let wagonsLenght = wagons.length;

    let maxCapacityOfEachWagon = Number(arr.shift())

    let arrLenght = arr.slice(0).length  //5
    for (let i = 0; i < arrLenght; i++) {
        let [passangers, command] = arr.shift().split(' ').reverse()

        if (command === 'Add') {
            wagons.push(+passangers)
        } else {
            for (let j = 0; j < wagonsLenght; j++) {
                if (wagons[j] + +passangers <= maxCapacityOfEachWagon) {
                    wagons[j] += +passangers
                    break;
                }
            }

        }


    }
    console.log(wagons.join(' '))

}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)