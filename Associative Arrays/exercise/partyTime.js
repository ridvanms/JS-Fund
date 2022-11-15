function partyTime(arr) {
    let vipList = [];
    let regularList = [];

    let element = arr.shift();
    while (element !== "PARTY") {
        if (!isNaN(+element[0])) vipList.push(element)
        else regularList.push(element)
        element = arr.shift();
    }
    let listOfInvited = vipList.concat(regularList);

    for (let i = 0; i < arr.length; i++) {

        if (listOfInvited.includes(arr[i])) {
            let indexOfGuest = listOfInvited.indexOf(arr[i])
            listOfInvited.splice(indexOfGuest, 1)
        }

    }
    console.log(listOfInvited.length)
    listOfInvited.map(guest => console.log(guest))
}
partyTime(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)