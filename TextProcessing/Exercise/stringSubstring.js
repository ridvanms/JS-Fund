function stringSubstring(word, text) {

    word = word.toLowerCase();
    let wordsInArray = text.split(" ");

    let theWord = '';
    for (let i = 0; i < wordsInArray.length; i++) {
        let wordInLowerCase = wordsInArray[i].toLowerCase()
        if (wordInLowerCase === word) {
            theWord = word;
            break;
        }
    }

    if (theWord) console.log(theWord);
    else console.log(`${word} not found!`)
};
stringSubstring('javascript', 'JavaScript is the best programming language'
)