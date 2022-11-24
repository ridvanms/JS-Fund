function serializeString(arr) {
    let textOfLetters = arr.shift();
    let textLenght = textOfLetters.length;

    let letterObj = {}
    for (let i = 0; i < textLenght; i++) {
        if (!letterObj.hasOwnProperty(textOfLetters[i])) letterObj[textOfLetters[i]] = [0]
        else letterObj[textOfLetters[i]].push(letterObj[textOfLetters[i]].length)
    }
    for (const key in letterObj) {
        console.log(key + ": " + letterObj[key].join('/'))
    }
}
serializeString(["avjavamsdmcalsdm"]);
