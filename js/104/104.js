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
const e = prompt('Один из последних просмотренных фильмов?', '');
const f = prompt('На сколько оцените его?', '');
const g = prompt('Один из последних просмотренных фильмов?', '');
const h = prompt('На сколько оцените его?', '');
      

personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;
personalMoveDB.movies[e] = f;
personalMoveDB.movies[g] = h;



console.log(personalMoveDB); 