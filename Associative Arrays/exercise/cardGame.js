function cardGame(arr) {
    let players = {};

    while (arr.length !== 0) {
        let [name, cards] = arr.shift().split(': ')
        if (!(players.hasOwnProperty(name))) players[name] = new Set(cards.split(', '));
        else {
            cards.split(', ').forEach(card => {
                if (!(players[name].has(card))) players[name].add(card)
            })
        }
    }

    let cardPoints = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (const key in players) {
        let points = 0;
        players[key].forEach(cardAndTipe => {
            //typeInTen  in case 'card = 10 type = anyType' 
            let [card, type, typeInTen] = cardAndTipe.split('');
            if (card !== '1') points += cardPoints[card] * cardPoints[type]
            else points += cardPoints['10'] * cardPoints[typeInTen]
        })

        console.log(`${key}: ${points}`)
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)