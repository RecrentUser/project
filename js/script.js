"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const question1 = prompt('Один из последних просмотренных фильмов?', ''),
      question2 = prompt('На сколько оцените его?', ''),
      question3 = prompt('Один из последних просмотренных фильмов?', ''),
      question4 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

function showMyDB() {
    if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
    } else {
        console.log('error');
    }
}
showMyDB();

function writeYourGenres() {
    const a = prompt("Ваш любимый жанр под номером ${1}", ''),
          b = prompt("Ваш любимый жанр под номером ${2}", ''),
          c = prompt("Ваш любимый жанр под номером ${3}", '');
    personalMovieDB.genres[0] = a;
    personalMovieDB.genres[1] = b;
    personalMovieDB.genres[2] = c;
    return personalMovieDB.genres;
}
writeYourGenres();
