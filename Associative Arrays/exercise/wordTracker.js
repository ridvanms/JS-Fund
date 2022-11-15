function wordTracker(arr) {
    let theWords = arr.shift().split(' ');

    let wordCounts = {};
    for (const choosenWord of theWords) {
        wordCounts[choosenWord] = 0;
    }

    for (const word of arr) {
        if (wordCounts.hasOwnProperty(word)) wordCounts[word]++;
    }
    let sorted = new Map();
    for (const key in wordCounts) {
        sorted.set(key, wordCounts[key])
    }
    sorted = Array.from(sorted).sort((a, b) => b[1] - a[1])
    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]}`)
    })
}
wordTracker([
    'is the',
    'first', 'sentence', 'Here',
    'is', 'another', 'the', 'And',
    'finally', 'the', 'the', 'sentence']

);