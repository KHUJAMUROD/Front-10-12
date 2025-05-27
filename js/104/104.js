'use strict'
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoveDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [], 
     privat: false
};
 
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');  
const d = prompt('На сколько оцените его?', '');

      

personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;



console.log(personalMoveDB); 

