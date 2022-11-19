function garage(arr) {
  let garages = {};
  let index = 1;
  arr.forEach((el) => {
    let [numberOfGarage, info] = el.split(" - ");
    if (!garages.hasOwnProperty(numberOfGarage)) garages[numberOfGarage] = {};
    garages[numberOfGarage][`car${index}`] = {};

    let characteristics = info.split(", ");
    characteristics.forEach((charact) => {
      let [key, value] = charact.split(": ");

      garages[numberOfGarage][`car${index}`][key] = value;
    });
    index++;
  });

  for (const garage in garages) {
    console.log(`Garage № ${garage}`);
    for (const car in garages[garage]) {
      let result = ``;
      let charactsArray = [];
      for (const key in garages[garage][car]) {
        charactsArray.push(key);
      }
      result = `--- ${charactsArray[0]} - ${
        garages[garage][car][charactsArray[0]]
      }`;
      for (let i = 1; i < charactsArray.length; i++) {
        result += `, ${charactsArray[i]} - ${
          garages[garage][car][charactsArray[i]]
        }`;
      }
      console.log(result);
    }
  }
}
garage([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
]);
// Garage № 1
// --- color - green, fuel type - petrol
// --- color - dark red, manufacture - WV
// Garage № 2
// --- fuel type - diesel
// Garage № 3
// --- color - dark blue, fuel type - petrol
