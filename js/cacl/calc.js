'use strict'


let currentInput = '0';
let previousInput = '';
let operation = null;
let resetInput = false;

const resultElement = document.getElementById('result');
const historyElement = document.getElementById('history');

function updateDisplay() {
    resultElement.textContent = currentInput;
    historyElement.textContent = previousInput + (operation ? ' ' + operation + ' ' : '');
}

function appendNumber(number) {
    if (currentInput === '0' || resetInput) {
        currentInput = number;
        resetInput = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// console.log('1' + '2');

function appendDecimal(decimal) {
    if (resetInput) {
        currentInput = '0' + decimal;
        resetInput = false;
    } else if (!currentInput.includes(decimal)) {
        currentInput += decimal;
    }
    updateDisplay();
}
console.log(123 !== 223);

function appendOperation(op) {
    if (operation !== null && !resetInput) {
        calculate();
    }
    previousInput = currentInput;
    operation = op;
    resetInput = false;
    updateDisplay();
}

let reset = false
let n = 10

let n2 = 5
if(reset){
    console.log(`${n + n2} `);
}else{
    console.log(`${n + "5"}`);
}


function calculate() {
    if (operation === null || resetInput) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    // Handle potential floating point issues
    result = Math.round(result * 1000000) / 1000000;

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}
// console.log(10 / 3);

// console.log(Math.round(3333333.3333333335 ));

// console.log(3333333 / 1000000);



//123.

// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(5.4));
// console.log(parseInt(5.5123));
// console.log(parseFloat(5.5123));


function clearAll() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    resetInput = false;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    resetInput = false;
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// Initialize display
updateDisplay();