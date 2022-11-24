function valueOfAString(arr) {
    let text = arr.shift();
    let theCase = arr.shift();

    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let letterInAsci = text[i].charCodeAt()
        switch (theCase) {
            case "LOWERCASE":
                if (letterInAsci > 96 && letterInAsci < 123) sum += letterInAsci
                break;
            case "UPPERCASE":
                if (letterInAsci > 64 && letterInAsci < 91) sum += letterInAsci;
                break;
        }
    }
    console.log("The total sum is: " + sum)
}
valueOfAString(
    ['AC/DC',
        'UPPERCASE']


);