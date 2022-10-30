function movies(arr) {
  let arrLength = arr.length;

  let names = [];
  let directors = [];
  let data = [];

  let first = [];

  for (let i = 0; i < arrLength; i++) {
    let elements = arr.shift();

    if (elements.includes("addMovie")) {
      let [_, ...name] = elements.split(" ");
      names.push([...name].join(" "));
    }
    if (elements.includes("directedBy")) {
      let [...arr] = elements.split(" ");
      let index = [...arr].indexOf("directedBy");

      let nameOfMovie = [...arr].slice(0, index).join(" ");

      if (names.includes(nameOfMovie)) {
        directors[names.indexOf(nameOfMovie)] = [...arr]
          .slice(index + 1)
          .join(" ");
        first[names.indexOf(nameOfMovie)];
      }
    }
    if (elements.includes("onDate")) {
      let [...arr] = elements.split(" ");
      let index = [...arr].indexOf("onDate");

      let nameOfMovie = [...arr].slice(0, index).join(" ");

      if (names.includes(nameOfMovie)) {
        data[names.indexOf(nameOfMovie)] = [...arr][index + 1];
      }
    }
  }
  for (let i = 0; i < names.length; i++) {
    if (names[i] && directors[i] && data[i]) {
      let movie = {
        name: names[i],
        director: directors[i],
        date: data[i],
      };
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
