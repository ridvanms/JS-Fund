// function wordOccurrences(arr) {
//     let map = new Map();

//     arr.forEach(word => {
//         let wordOccurrences = 1;

//         if (map.has(word)) {
//             wordOccurrences += map.get(word);
//         }

//         map.set(word, wordOccurrences)
//     })

//     let sorted = Array.from(map);
//     sorted.sort((a, b) => b[1] - a[1])

//     for (let [word, words] of sorted) {
//         console.log((`${word} -> ${words} times`));
//     }
// }

function wordOccurrences(arr) {
    let wordCounts = new Map();

    arr.forEach(word => {
        let counter = 1;
        if (wordCounts.has(word)) counter += wordCounts.get(word);
        wordCounts.set(word, counter);
    })

    let sorted = Array.from(wordCounts);
    sorted.sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`)
    })
}
wordOccurrences(["Here",
    "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]
)