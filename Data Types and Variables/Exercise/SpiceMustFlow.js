function spice(yield) {
    let startingYield = +yield;
    let miningCrew = 26;

    let yieldConsume = 0;
    let days = 0;
    let totalAmount = 0;
    while (startingYield >= 100) {
        // counting days
        days++;
        // yield consumming per day
        yieldConsume = startingYield;
        yieldConsume -= miningCrew;
        // adding consumations to the tottal amount
        totalAmount += yieldConsume;
        // extracting the spices
        startingYield -= 10;
        if (startingYield < 100) {
            totalAmount -= 26
        }
        if (totalAmount < 0) {
            totalAmount = 0
        }
    }
    console.log(days + '\n' + totalAmount);
}
spice(450)