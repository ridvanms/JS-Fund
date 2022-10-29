function convertingToJson(name, lastName, hairColor) {
  let toObject = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };
  let toJson = JSON.stringify(toObject);
  return toJson;
}
convertingToJson("George", "Jones", "Brown");
