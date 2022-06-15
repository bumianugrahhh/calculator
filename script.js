// Menampilkan angka ke calculator screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event)=> {
        updateScreen(event.target.value);
    })
});

// Menyiapkan Angka-angka dan Operator untuk Kalkulasi
let prevNumber ='';
let calculationOperator='';
let currentNumber='';

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

// Mengaktifkan Fungsi Kalkulasi ke Aplikasi
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

// Button AC
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

// Menghitung angka decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot;
}

// Invers
const inversBtn = document.querySelector(".invers");

inversBtn.addEventListener("click", (event) => {
    inputInvers(event.target.value);
    updateScreen(currentNumber);
})

inputInvers = () => {
    currentNumber *= -1;
}

// Percentage
const percent = document.querySelector(".percentage");

percent.addEventListener("click", (event) => {
    inputPercent(event.target.value);
    updateScreen(currentNumber);
    return;
})

inputPercent = () => {
    currentNumber /= 100;
}

// Sin
const phi = document.querySelector(".phi");

phi.addEventListener("click", (event) => {
    inputPhi(event.target.value);
    updateScreen(currentNumber);
    return;
})

inputPhi = () => {
    currentNumber = 3.14159265359;
}