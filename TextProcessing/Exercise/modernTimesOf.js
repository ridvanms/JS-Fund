function modernTimesOf(text) {
  let textAsArray = text.split(" ");
  textAsArray.forEach((el) => {
    let word = "";
    if (el.startsWith("#") && !el.endsWith("#")) {
      let elArr = el.split("");
      for (let i = 1; i < elArr.length; i++) {
        let numberOfLetter = elArr[i].toLowerCase().charCodeAt(elArr[i]);
        if (numberOfLetter > 96 && numberOfLetter < 123) {
          word += elArr[i];
        } else return;
      }
      console.log(word);
    }
  });
}
modernTimesOf(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
