function charactersInRange(strOne, strTwo) {
  let starterString = Math.min(strOne.charCodeAt(), strTwo.charCodeAt());
  let endString = Math.max(strOne.charCodeAt(), strTwo.charCodeAt());

  let result = "";
  for (let index = starterString + 1; index < endString; index++) {
    result += `${String.fromCharCode(index)} `;
  }
  console.log(result);
}
charactersInRange("#", ":");
