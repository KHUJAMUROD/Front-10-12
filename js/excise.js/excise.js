////ex-1////

// const str = "Строка";

// const half = parseInt(str.length / 2)

// const sliced = str.slice(0, half);

// console.log(sliced); /// стр


////ex-2////

// const str = "строка";

// const sliced = str.slice(-3);

// console.log(sliced);

////ex-3////

// const str = "Атомная станция";

// const replaced = str.replace(/А/gi, "е");
// console.log(replaced); ///етомнея стенция


////ex-4////

// const str = "Hello world";

// const replaced = str.replace(/world/gi, "universe");
// console.log(replaced); /// Hello universe

////ex-5////

// let str = "hello";

// let expectedLength = 10;

// if(str.length < expectedLength) {
//     const totalPadding = expectedLength - str.length;
//     const left = Math.floor(totalPadding / 2);
//     const right = totalPadding - left;
    
//     const sym = "*".repeat(expectedLength);

//     const leftSym = sym.slice(0, left)
//     const rightSym = sym.slice(0, right)

//     const result = leftSym + str + rightSym;
//     console.log(result);
    
// }




// let fullName = "Vladimir Vladimirovich Putin";

// fullName = fullName.split(' ');

// console.log(`${fullName[2]} ${fullName[0].slice(0, 1)}.${fullName[1].slice(0,1)}`);

////ex-7////
// function strName(str, n) {
//     const mid = Math.floor(str.length / 2);
//     const first = str.slice(0, mid);
//     const second = str.slice(mid);
//     return first.repeat(n) + second.repeat(n); 


// let str = "This is test text";

// let strName = str[0] + str.slice(1).replace(/t/gi, "$")

// console.log(strName);
