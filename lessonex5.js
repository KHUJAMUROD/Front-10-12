// function vs method

// const ism = 'shoxrux';

// function


// const greet = () => 'hello world'; 

// const result = greet()
// console.log(result);


// // methods

// let ism  = 'shoxrux'
// const res = ism.toUpperCase()
// console.log(res);


// 34.234234.toFixed() 

// console.log(34.1234.toFixed()); // 34
// console.log(34.1234.toFixed(2)); // 34.12


// tahlil


// function calcArea(birthYear, firstname){
//     const age = 2025 - birthYear
//     console.log(`${firstname} siz ${age} yoshga kirdiz`);
//     return age
// }


// const age = calcArea(2009, 'shoxrux')



// callback function






// myFunc(function(value) { console.log(value);})

const myFunc = (callBackFn) =>  {
    let number = 50
    callBackFn(number)
}

const callbackFunc = function(value) {
  console.log(value);
}

myFunc(callbackFunc)






// forEach

const ismlar = ['ahror', 'sardor', 'donior', 'farxod']
const newIsmlar = []

ismlar.forEach(function (ism, i) {
    // console.log('ism');
    const newIsm = ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase() +"bek"
    console.log(newIsm)
    // newIsmlar.push(newIsm)
    // console.log(newIsm, i);
})


// for( let i = 0; i<ismlar.length; i++){
//     console.log(ismlar[i]);
// }


// object

// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   lang: ['uzbek', 'russian', 'english'],
// }

// console.log(user)
// console.log(user.email)

// user.age = 25
// console.log(user.age)

// console.log(user['location'])
// user['name'] = 'Doniyor'
// console.log(user['name'])

// console.log(typeof user)



// onjeclarga mehtod qo'shish

// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   langs: ['uzbek', 'russian', 'english'],
//   login: function () {
//     console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//   },
//   logout: function () {
//     console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//   },
//   speak: function () {},
// }


// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   langs: ['uzbek', 'russian', 'english'],
//   login: function () {
//     console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//   },
//   logout: function () {
//     console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//   },
//   speak: function () {
//     console.log(this)
//     console.log('I can speak:')
//     this.langs.forEach((lang) => {
//       console.log(lang)
//     })
//   },
// }

// user.speak()


// objectlar arrayda

// { name: 'Harry Potter', likes: 484 },
// { name: 'Titanic', likes: 987 },
// { name: 'Sitve Jobs', likes: 156 },
// { name: 'Sherlock', likes: 574 },

// const user = {
//   name: 'Ahror',
//   age: 24,
//   email: 'akhrorteacher@gmail.com',
//   location: "Farg'ona",
//   langs: ['uzbek', 'russian', 'english'],
//   login: function () {
//     console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//   },
//   logout: function () {
//     console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//   },
//   speak: function () {
//     console.log(this)
//     console.log('I can speak:')
//     this.langs.forEach((lang) => {
//       console.log(lang)
//     })
//   },
//   movies: [
//     { name: 'Avatar', likes: 456 },
//     { name: 'Harry Potter', likes: 484 },
//     { name: 'Titanic', likes: 987 },
//     { name: 'Sitve Jobs', likes: 156 },
//     { name: 'Sherlock', likes: 574 },
//   ],
// }

// // objectlar arrayda

// const movies = [
//   { name: 'Avatar', likes: 456 },
//   { name: 'Harry Potter', likes: 484 },
//   { name: 'Titanic', likes: 987 },
//   { name: 'Sitve Jobs', likes: 156 },
//   { name: 'Sherlock', likes: 574 },
// ]

// movies.forEach((movie) => {
//   // console.log(movie.name)
//   // console.log(movie.likes)
//   const result = `Kino nomi: ${movie.name}🎥, Likes: ${movie.likes}💖`
//   console.log(result)
// })

// user.moviesWatch()