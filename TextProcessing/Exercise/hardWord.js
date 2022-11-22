function hardWord(textAndWords) {
    let text = textAndWords[0].split(' ')
    let words = textAndWords[1]

    text.forEach((wordFromText, index) => {
        if (!wordFromText.startsWith('_')) {
            return;
        }
        for (let i = 0; i < words.length; i++) {
            let wordFromTextLength = wordFromText.length;

            if (wordFromText[wordFromTextLength - 1] !== '_') {
                let signInTheEnd = wordFromText[wordFromTextLength - 1];
                let wordSignsLength = wordFromText.slice(0, wordFromTextLength - 1).length;

                if (wordSignsLength === words[i].length) {
                    text[index] = `${words[i]}${signInTheEnd}`
                    break;
                }
            } else if (words[i].length === wordFromTextLength) {
                text[index] = words[i];
                break
            }
        }
    })
    text = text.join(" ")
    console.log(text)
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);