function heroRecruitment(arr) {

    let command = arr.shift();
    let heroCollection = {}
    while (command != 'End') {
        let tokens = command.split(' ');

        switch (tokens[0]) {
            case 'Enroll':
                {
                    let heroName = tokens[1]
                    if (!heroCollection.hasOwnProperty(heroName)) heroCollection[heroName] = [];
                    else console.log(`${heroName} is already enrolled.`)
                }
                break;
            case 'Learn':
                {
                    let heroName = tokens[1];
                    let spellName = tokens[2];
                    if (!heroCollection.hasOwnProperty(heroName)) console.log(`${heroName} doesn't exist.`)
                    else {

                        if (heroCollection[heroName].includes(spellName)) console.log(`${heroName} has already learnt ${spellName}.`)
                        else heroCollection[heroName].push(spellName)

                    }
                }
                break;
            case 'Unlearn':
                {
                    let heroName = tokens[1];
                    let spellName = tokens[2];

                    if (!heroCollection.hasOwnProperty(heroName)) console.log(`${heroName} doesn't exist.`)
                    else {
                        if (!heroCollection[heroName].includes(spellName)) console.log(`${heroName} doesn't know ${spellName}.`)
                        else {

                            let index = heroCollection[heroName].indexOf(spellName);
                            heroCollection[heroName].splice(index, 1)
                        }
                    }
                }
                break;
        }

        command = arr.shift();
    }
    console.log('Heroes:')
    for (const hero in heroCollection) {
        let spells = ''
        if (heroCollection[hero]) {
            spells = heroCollection[hero].join(', ')
        }

        console.log(`== ${hero}: ${spells}`)
    }
}
// heroRecruitment(
//     ["Enroll Stefan",
//         "Enroll Peter",
//         "Enroll Stefan",
//         "Learn Stefan ItShouldWork",
//         "Learn John ItShouldNotWork",
//         "Unlearn George Dispel",
//         "Unlearn Stefan ItShouldWork",
//         "End"]
// )
// heroRecruitment(["Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End"])
heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])