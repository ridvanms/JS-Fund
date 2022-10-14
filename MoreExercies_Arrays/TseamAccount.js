function tseamAccount(arr) {
  let gamesArray = arr.shift().split(" ");

  function checkingForIndex(game) {
    let indexOfTheGame = gamesArray.includes(game)
      ? gamesArray.indexOf(game)
      : -1;

    return indexOfTheGame;
  }

  while (arr[0] !== "Play!") {
    let counter = 0;
    let [command, game] = arr.shift().split(" ");

    if (command === "Install") {
      for (let i = 0; i < gamesArray.length; i++) {
        if (game === gamesArray[i]) {
          counter++;
          break;
        }
      }
      if (counter === 0) gamesArray.push(game);
    } else if (command === "Uninstall") {
      if (checkingForIndex(game) >= 0) {
        gamesArray.splice(checkingForIndex(game), 1);
      }
    } else if (command === "Update") {
      if (checkingForIndex(game) >= 0) {
        let gameInIt = gamesArray.splice(checkingForIndex(game), 1).shift();
        gamesArray.push(gameInIt);
      }
    } else if (command === "Expansion") {
      let gameElement =
        checkingForIndex(game.split("-")[0]) >= 0
          ? game.split("-").join(":")
          : -1;
      if (gameElement !== -1) {
        gamesArray.splice(
          checkingForIndex(game.split("-")[0]) + 1,
          0,
          `${gameElement}`
        );
      }
    }
  }
  console.log(gamesArray.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
