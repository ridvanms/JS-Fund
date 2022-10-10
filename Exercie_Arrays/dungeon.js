function dungeon(input) {
    //taking the string from the array    
    let ArraytoString = input[0]
    //spliting the string , maken it to ellements in array
    let elementsInArray = ArraytoString.split('|')
    let elementsArrayLength = elementsInArray.length;

    let initialHealth = 100;
    let coins = 0;

    for (let i = 0; i < elementsArrayLength; i++) {
        let number = 0;
        let animal = 0;
        let thing_Counts = elementsInArray.shift();

        animal = thing_Counts.split(' ')[0];
        number = +thing_Counts.split(' ')[1];

        if (animal === 'potion') {
            if (initialHealth + number > 100) {
                number = 100 - initialHealth;
                initialHealth = 100;
            } else {
                initialHealth += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${initialHealth} hp.`)
        } else if (animal !== 'chest') {
            initialHealth -= number;
        }

        if (initialHealth <= 0) {
            console.log(`You died! Killed by ${animal}.`);
            console.log(`Best room: ${i + 1}`)
            return;
        } else if (animal === 'chest') {
            console.log(`You found ${number} coins.`)
            coins += number
        } else if (animal !== 'potion') {
            console.log(`You slayed ${animal}.`)
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${initialHealth}`);


}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])