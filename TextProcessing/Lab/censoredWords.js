function censoredWords(text, word) {
  let addingStars = "*".repeat(word.length);
  let censored = text.replace(word, addingStars);
  while (censored.includes(word)) {
    censored = censored.replace(word, addingStars);
  }
  console.log(censored);
}
censoredWords("A small sentence with some words", "small");
