//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(x => x.director);

  // document.getElementById("directors").innerHTML = result.join("<br>");
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(x => x.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  /*   let directors = array.filter(x => x.director === director);
    console.log("directors", directors)
    let scores = directors.map(x => x.score);
    console.log("scores", scores)
    let suma = scores.reduce((a, b) => a + b);
    console.log("suma", suma)
    result = suma / scores.length;
    console.log("result", result);
    console.log("EXERCICE 3 ->", result);
    return result; */

  // en una linea! :
  let result = array.filter(x => x.director === director).map(x => x.score).reduce((a, b) => a + b) / array.filter(x => x.director === director).length;

  console.log("EXERCICE 3 ->", result);
  return result;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let result = (array.map(x => x.title).sort());
  if (result.length > 20) {
    result.length = 20;
  }
  console.log("EXERCICE 4 ->", result);
  return result;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  // firs sort Alphabetically then for year
  sortAlphabetically = array.map(x => x).sort(compare);
  let result = sortAlphabetically.sort(function (a, b) { return a.year - b.year });

  console.log("EXERCICE 5 ->", result);
  return result;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let arrayCat = array.filter(x => x.genre.includes(category));
  //filtramos por solo lo que tengan score
  let arrayScore = arrayCat.filter(x => typeof (x.score) == "number")
  result = arrayScore.map(x => x.score).reduce((a, b) => a + b) / arrayScore.length;

  console.log("EXERCICE 6 ->", result);
  return result;
}


// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {

  let result = array.map(function (movie) {
    let h;
    let m;
    if ((movie.duration.split("h")).length == 2) {  //significa que tien horas y min
      h = Number((movie.duration.split("h"))[0]);
      m = Number(((movie.duration.split("h"))[1].split("min")[0]));
    } else {
      h = Number((movie.duration.split("h"))[0]);
      m = 0; //esto porque hay unas pelis que no tienen minutos
    }
    minTotal = (h * 60) + Number(m);
    return { ...movie, duration: minTotal } //esto quita el problema que decia que el array era el mismo!
  }
  );

  console.log("EXERCICE 7 ->", result);
  return result;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  arrayYear = array.filter(x => x.year == year)
  arraySort = arrayYear.sort((a, b) => b.score - a.score);
  result = [arraySort[0]];

  console.log("EXERCICE 8 ->", result);
  return result;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}