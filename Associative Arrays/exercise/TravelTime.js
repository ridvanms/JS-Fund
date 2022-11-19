function travelTime(arr) {
  let trip = {};
  arr.forEach((el) => {
    let [country, town, price] = el.split(" > ");

    if (!trip.hasOwnProperty(country)) trip[country] = {};
    if (!trip[country].hasOwnProperty(town)) trip[country][town] = price;
    else if (+trip[country][town] > +price) trip[country][town] = price;
  });

  let countryNamesSorting = [];
  for (const key in trip) {
    countryNamesSorting.push(key);
  }
  countryNamesSorting.sort((a, b) => a.localeCompare(b));

  countryNamesSorting.forEach((country) => {
    let townsSorting = [];
    for (const town in trip[country]) {
      townsSorting.push(town);
    }
    townsSorting.sort((a, b) => a.localeCompare(b));

    result = `${country} ->`;
    townsSorting.forEach(
      (town) => (result += ` ${town} -> ${trip[country][town]}`)
    );

    console.log(result);
  });
}
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
