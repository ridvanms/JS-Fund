function passwordValidator(password) {
  let passwordLength = password.length;
  let notEnougLength = passwordLength < 6 || passwordLength > 10;
  if (notEnougLength) {
    console.log("Password must be between 6 and 10 characters");
  }

  let symbol = false;
  let countOfDigits = 0;

  for (let i = 0; i < passwordLength; i++) {
    let numInAsci = password[i].charCodeAt();

    let isLetter =
      (numInAsci > 64 && numInAsci < 91) || (numInAsci > 96 && numInAsci < 123);
    let isDigit = numInAsci > 47 && numInAsci < 58;

    if (isDigit) countOfDigits++;
    if (!isLetter && !isDigit) {
      symbol = true;
    }
  }
  if (symbol) console.log("Password must consist only of letters and digits");
  if (countOfDigits < 2) console.log("Password must have at least 2 digits");
  if (countOfDigits >= 2 && !symbol && !notEnougLength) {
    console.log("Password is valid");
  }
}
passwordValidator("MyPass123");
