//  const numbers = [1, 3, 5, 9, 12];

// const operation = (arr) => {
//     const [num1, num2, ...num3] = arr;
//     console.log(num3);


//     return num1 + num2;
// }

// let result = operation(numbers);

// console.log(result);



// const numbers = [1, 3, 5, 9, 12];

// const operation = ([num1, num2, ...num3]) => {
//        console.log(num3);


//     return num1 + num2;
// }

// let result = operation(numbers);

// console.log(result);


// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };

// const someOperationWithPerson = (person) => {
//     const{
//         age, 
//         params: {height, weight},
//         hobbies: [firstHobby],
//     } = person;

//     console.log(age, height, weight, firstHobby);
// }

// someOperationWithPerson(person)



// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };


// const someOperationWithPerson = ( {age, params: {height, weight},hobbies: [firstHobby],}) => {
//     console.log(age, height, weight, firstHobby);
// }


// someOperationWithPerson(person)




// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };

// const someOperationWithPerson = ({height, weight}) => {
//     console.log(height, weight);
// }

// someOperationWithPerson(person.params)



// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };

// function printPersonDetails({height, weight}) {
//     console.log(height, weight);
// }

// printPersonDetails(person.params);


// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };

// function printPersonDetails([firstHobby, ...otherHobbies]) {
//     console.log(firstHobby);
//     console.log(otherHobbies);
// }

// printPersonDetails(person.hobbies);



// const person = {
//     id: 1,
//     fullName: "John Jonson",
//     age: 34,
//     isMarried: true,
//     params: {
//         height: 178,
//         weight: 75,
//     },
//     hobbies: ["web", "jogging", "cycling"],
// };

// function printPersonDetails({fullName,age,params: {height, weight},hobbies: [firstHobby, ...otherHobbies],}) {
//     console.log(fullName, age, height, weight);
//     console.log(firstHobby);
//     console.log(otherHobbies.join(", "));
// }

// printPersonDetails(person);



// const person = null;

// function printPersonDetails({ fullName = "Unknow", age = 0, params: { height = 0, weight = 0} = {}, hobbies: [firstHobby = "Unknown", ...otherhHobbies] = [],}) {
//     console.log(fullName, age, height, weight, firstHobby, otherhHobbies);
// }

// printPersonDetails(person || {})



// const people = [
//     {
//         id: 1,
//         fullName: "John Jonson",
//         age: 34,
//         isMarried: true,
//         params: {
//             height: 178,
//             weight: 75,
//         },
//         hobbies: ["web", "jogging", "cycling"],
//     },
//     {
//         id: 2, 
//         fullName: "Jane Smith",
//         age: 28,
//         isMarried: false,
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];

// for (const {fullName, age, hobbies: [firstHobby, ...otherhHobbies]} of people) {
//     console.log(fullName, age, firstHobby, otherhHobbies);
// }



// const people = [
//     {
//         id: 1,
//         fullName: "John Jonson",
//         age: 34,
//         isMarried: true,
//         params: {
//             height: 178,
//             weight: 75,
//         },
//         hobbies: ["web", "jogging", "cycling"],
//     },
//     {
//         id: 2, 
//         fullName: "Jane Smith",
//         age: 28,
//         isMarried: false,
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];


// people.forEach(({fullName, age, hobbies: [firstHobby, ...otherhHobbies] }) => {
//     console.log(fullName, age, firstHobby, otherhHobbies.join(", "));
// })



// const people = [
//     {
//         id: 1,
//         fullName: "John Jonson",
//         age: 34,
//         isMarried: true,
//         params: {
//             height: 178,
//             weight: 75,
//         },
//         hobbies: ["web", "jogging", "cycling"],
//     },
//     {
//         id: 2, 
//         fullName: "Jane Smith",
//         age: 28,
//         isMarried: false,
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];


// const bmiPeople = people.map(({params: { weight, height} }) => {
//     const heightInMeters = height / 100;
//     const bmi = (weight / heightInMeters ** 2).toFixed(1);

//     return bmi;
// });

// console.log(bmiPeople.join(", "));




// const people = [
//     {
//         id: 1,
//         fullName: "John Jonson",
//         age: 34,
//         isMarried: true,
//         params: {
//             height: 178,
//             weight: 75,
//         },
//         hobbies: ["web", "jogging", "cycling"],
//     },
//     {
//         id: 2, 
//         fullName: "Jane Smith",
//         age: 28,
//         isMarried: false,
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];


// const bmiPeople = people.map((person) => {
//     const heightInMeters = person.params.height / 100;
//     const bmi = (person.params.weight / heightInMeters ** 2).toFixed(1);

//     return bmi;
// });

// console.log(bmiPeople.join(", "));


// const people = [
//     {
//         id: 1,
//         fullName: "John Jonson",
//         age: 34,
//         isMarried: true,
//         params: {
//             height: 178,
//             weight: 75,
//         },
//         hobbies: ["web", "jogging", "cycling"],
//     },
//     {
//         id: 2, 
//         fullName: "Jane Smith",
//         age: 28,
//         isMarried: false,
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];


// const tallPeople = people.filter(({ params: { height }})  => height > 170 );

// console.log(tallPeople);



