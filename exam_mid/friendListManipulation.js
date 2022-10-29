function listManipulation(arr) {
  let listOfFriends = arr.shift();
  let arrListOfFriends = listOfFriends.split(", ");

  let blackList = [];
  let lostDueToError = [];

  let arrByCommands = arr.shift().split(" ");
  let command = arrByCommands[0];
  while (command !== "Report") {
    let index = 0;
    switch (command) {
      case "Blacklist":
        let name = arrByCommands[1];
        if (arrListOfFriends.includes(name)) {
          index = arrListOfFriends.indexOf(name);
          arrListOfFriends[index] = "Blacklisted";
          blackList.push(name);
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        index = Number(arrByCommands[1]);
        let hasName = arrListOfFriends[index];
        if (hasName && hasName !== "Blacklisted" && hasName !== "Lost") {
          lostDueToError.push(hasName);
          arrListOfFriends[index] = "Lost";
          console.log(`${hasName} was lost due to an error.`);
        }
        break;
      case "Change":
        index = Number(arrByCommands[1]);
        let newName = arrByCommands[2];
        if (arrListOfFriends[index]) {
          console.log(
            `${arrListOfFriends[index]} changed his username to ${newName}.`
          );
          arrListOfFriends[index] = newName;
        }
    }
    arrByCommands = arr.shift().split(" ");
    command = arrByCommands[0];
  }
  console.log(`Blacklisted names: ${blackList.length}`);
  console.log(`Lost names: ${lostDueToError.length}`);
  console.log(arrListOfFriends.join(" "));
}
listManipulation([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
