function softUniBar(arr) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;


    let totalIncome = 0;
    let command = arr.shift();
    while (command !== 'end of shift') {
        let match = pattern.exec(command)
        if (match) {
            let customerName = match.groups.customer;
            let product = match.groups.product;
            let count = match.groups.count;
            let price = match.groups.price;
            totalIncome += price * count

            console.log(`${customerName}: ${product} - ${(price * count).toFixed(2)}`)
        }
        command = arr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softUniBar(
    ['%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift']

)
softUniBar(
    ['%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift']

)