function catalogue(arr) {

    let arrWithObj = [];
    arr.forEach(el => {
        let [item, number] = el.split(' : ');

        let newObj = {
            name: item,
            price: +number
        };

        arrWithObj.push(newObj);
    })

    arrWithObj.sort((a, b) =>
        a.name.localeCompare(b.name)
    )

    let currentLetter = '';
    for (const product of arrWithObj) {
        if (product.name.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`)
        } else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)

        }
    }
}
catalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]

)