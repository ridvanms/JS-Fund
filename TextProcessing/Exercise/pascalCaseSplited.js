function pascalCaseSplited(text) {

    let arrayOfChars = text.split('');

    let result = ''
    arrayOfChars.forEach(char => {
        if (char === char.toUpperCase()) result += `, ${char}`
        else result += char
    });

    console.log(result.substring(2))
};
pascalCaseSplited('SplitMeIfYouCanHaHaYouCantOrYouCan');