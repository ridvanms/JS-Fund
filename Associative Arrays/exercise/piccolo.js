function piccolo(arr) {
    let registrations = new Map();
    arr.forEach(el => {
        el = el.split(', ')

        if (el[0] === 'IN') registrations.set(el[1], el[0])
        else registrations.delete(el[1])
    })
    let unique = new Set();
    Array.from(registrations).sort((a, b) => a[0].localeCompare(b[0])).map(el => {
        unique.add(el[0])
    })

    unique.forEach(registration => {
        console.log(registration)
    })
}
// "Parking Lot is Empty"

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);