function rightPlace(missingChar, char, word) {
    let addedMissingChar = ''
    for (let i = 0; i <= missingChar.length - 1; i++) {
        if (missingChar[i] == '_') {
            addedMissingChar += char;
        } else {
            addedMissingChar += missingChar[i];
        }
    }
    if (addedMissingChar === word) {
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
}
rightPlace('str_ng', 'o', 'strong');