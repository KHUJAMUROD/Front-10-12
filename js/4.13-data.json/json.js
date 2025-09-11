// const myObject = `{
//     "stringValue": "Hello, World!",
//     "numberValue": 42,
//     "booleanValue": true,
//     "nullValue": null,
//     "arrayValue":[1, 2, 3, 4, 5],
//     "objectValue": {
//         "nestedString": "nested value",
//         "nestedNumber": "123.45",
//         "nestedBoolean": false,
//         "nestedArray": ["a", "b", "c"],
//         "nestedObject": {
//             "deepString": "deep nested value",
//             "deepNumber": 678.9
//         }
//     },
//     "dataValue": "2023-10-05T14:48:00Z",
//     "complexArray": [
//         {
//             "name": "John Doe",
//             "age": 30,
//             "isActive": true
//         },
//         {
//             "name": "Jane Smith",
//             "age": 25,
//             "isActive": false
//         }
//     ]
// }`; 

// console.log(myObject);



// const myObject = `{
//     "stringValue": "Hello, World!",
//     "numberValue": 42,
//     "booleanValue": true,
//     "nullValue": null,
//     "arrayValue":[1, 2, 3, 4, 5],
//     "objectValue": {
//         "nestedString": "nested value",
//         "nestedNumber": "123.45",
//         "nestedBoolean": false,
//         "nestedArray": ["a", "b", "c"],
//         "nestedObject": {
//             "deepString": "deep nested value",
//             "deepNumber": 678.9
//         }
//     },
//     "dataValue": "2023-10-05T14:48:00Z",
//     "complexArray": [
//         {
//             "name": "John Doe",
//             "age": 30,
//             "isActive": true
//         },
//         {
//             "name": "Jane Smith",
//             "age": 25,
//             "isActive": false
//         }
//     ]
// }`; 

// console.log(myObject);
// const parsedMyObject = JSON.parse(myObject)
// console.log(parsedMyObject);
// console.log(parsedMyObject.complexArray);




// const myObject = `{
//     "stringValue": "Hello, World!",
//     "numberValue": 42,
//     "booleanValue": true,
//     "nullValue": null,
//     "arrayValue":[1, 2, 3, 4, 5],
//     "objectValue": {
//         "nestedString": "nested value",
//         "nestedNumber": "123.45",
//         "nestedBoolean": false,
//         "nestedArray": ["a", "b", "c"],
//         "nestedObject": {
//             "deepString": "deep nested value",
//             "deepNumber": 678.9
//         }
//     },
//     "dataValue": "2023-10-05T14:48:00Z",
//     "complexArray": [
//         {
//             "name": "John Doe",
//             "age": 30,
//             "isActive": true
//         },
//         {
//             "name": "Jane Smith",
//             "age": 25,
//             "isActive": false
//         }
//     ]
// }`; 

// const parsedMyObject = JSON.parse(myObject)

// const { complexArray } = parsedMyObject;

// console.log(parsedMyObject.complexArray);
// console.log(complexArray);




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


// console.log(JSON.stringify(people));



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

//         plus() {
//             return this.age + 1;
//         },
//         params: {
//             height: 168,
//             weight: 66,
//         },
//         hobbies: ["reading", "painting"],
//     },
// ];

// const people2 = JSON.parse(JSON.stringify(people));

// people2[1].id = 3

// console.log(JSON.stringify(people));
// console.log(JSON.stringify(people2));
