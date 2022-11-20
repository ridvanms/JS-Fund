function stringOccurrences(text, word) {
  let counter = 0;

  let arrWithWords = text.split(" ");
  while (arrWithWords.includes(word)) {
    counter++;
    let indexOfWord = arrWithWords.indexOf(word);
    arrWithWords.splice(indexOfWord, 1);
  }
  console.log(counter);
}
stringOccurrences("This is a word and it also is a sentence", "is");
