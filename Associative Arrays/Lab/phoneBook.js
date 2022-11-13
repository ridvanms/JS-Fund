function phoneBook(arr) {
    let obj = {}
    for (const line of arr) {
        let [name, phoneNumber] = line.split(' ');
        obj[name] = phoneNumber;
    }
    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
    }
}
phoneBook(
    [
        'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ]
)