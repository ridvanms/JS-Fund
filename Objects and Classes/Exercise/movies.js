function movies(arr) {
  let movies = [];

  arr.forEach((el) => {
    if (el.includes("addMovie")) {
      let name = el.split("addMovie ")[1];
      movies.push({ name });
    } else if (el.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");
      let movie = movies.find((m) => m.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (el.includes("onDate")) {
      let [movieName, date] = el.split(" onDate ");
      let movie = movies.find((movie) => movie.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  });
  movies.forEach((movie) => {
    if (movie.director && movie.date) console.log(JSON.stringify(movie));
  });
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
