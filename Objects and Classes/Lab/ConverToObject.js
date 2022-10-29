function convertor(jsonFile) {
  let jsonToObject = JSON.parse(jsonFile);

  for (const key of Object.keys(jsonToObject)) {
    console.log(`${key}: ${jsonToObject[key]}`);
  }
}
convertor('{"name": "George", "age": 40, "town": "Sofia"}');
