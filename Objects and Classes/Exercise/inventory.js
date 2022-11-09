function inventory(arr) {
    let registerForHeroes = []
    for (let i = 0; i < arr.length; i++) {
        let [Hero, level, items] = arr[i].split(' / ');


        let currentObj = {
            Hero,
            level: Number(level),
            items
        }
        registerForHeroes.push(currentObj);
    }

    registerForHeroes.sort((a, b) => a.level - b.level)

    for (const hero of registerForHeroes) {
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);