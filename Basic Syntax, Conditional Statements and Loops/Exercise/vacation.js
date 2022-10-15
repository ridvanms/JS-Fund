function vacataion(peopleCounts, typePeople, day) {
    let price = 0
    if (typePeople === 'Students') {
        if (day === 'Friday') {
            price = peopleCounts * 8.45;
        } else if (day === 'Saturday') {
            price = peopleCounts * 9.80;
        } else if (day === 'Sunday') {
            price = peopleCounts * 10.46;
        }
        if (peopleCounts >= 30) {
            price *= 0.85;
        }
    } else if (typePeople === 'Business') {
        if (peopleCounts >= 100) {
            peopleCounts -= 10;
        }
        if (day === 'Friday') {
            price = peopleCounts * 10.90;
        } else if (day === 'Saturday') {
            price = peopleCounts * 15.60;
        } else if (day === 'Sunday') {
            price = peopleCounts * 16;
        }
    } else if (typePeople === 'Regular') {
        if (day === 'Friday') {
            price = peopleCounts * 15;
        } else if (day === 'Saturday') {
            price = peopleCounts * 20;
        } else if (day === 'Sunday') {
            price = peopleCounts * 22.50
        }
        if (peopleCounts >= 10 && peopleCounts <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacataion(30, 'Students', 'Friday')



