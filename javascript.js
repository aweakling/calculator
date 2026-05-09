const outerLayout = document.querySelector("#outer-layout");
const numButtons = document.querySelector("#num-buttons");
const operators = document.querySelector("#operators");
const results = document.querySelector("#results");


function appendToResults (input) {
    results.value += input;
}

function calculate (num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error";
        default: return 0;
    }
}