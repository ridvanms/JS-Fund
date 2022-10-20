function houseParty(arr) {
    let guesstsList = [];

    let arrLenght = arr.length;
    for (let i = 0; i < arrLenght; i++) {
        let element = arr[i].split(' ')
        let name = element[0]
        let elementsLength = element.length;
        if (elementsLength === 3) {
            if (!guesstsList.includes(name)) {
                guesstsList.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (!guesstsList.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                guesstsList = guesstsList.filter(x => x != name)
            }
        }
    }
    console.log(guesstsList.join('\n'))
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

)