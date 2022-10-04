function gladiator(lostFights, helmetPrice, swordPrice, shieldriPce, armorPrice) {
    let expenses = 0;
    let shieldBreaks = 0;
    for (let fights = 1; fights <= lostFights; fights++) {
        if (fights % 2 === 0) {
            expenses += helmetPrice;
        }
        if (fights % 3 === 0) {
            expenses += swordPrice;
        }
        if (fights % 2 === 0 && fights % 3 === 0) {
            expenses += shieldriPce;
            shieldBreaks++;
            if (shieldBreaks % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiator(7, 2, 3, 4, 5)