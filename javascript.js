const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.textContent;
        calculate(keyValue);
    });
});

function operate (num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);

    if(operator === "+") return num1 + num2;
    if(operator === "-") return num1 - num2;
    if(operator === "x") return num1 * num2;
    if(operator === "/") return num1 / num2;
}

function calculate (input) {

    if(input === "C"){
        outputDisplay.value = "";
        firstNum = "";
        secondNum = "";
        operator = "";
        return;
    }

    if(input === "") return outputDisplay.value = " ";

    if((["+", "-", "x","/"]).includes(input)){
        firstNum = outputDisplay.value;
        operator = input;
        outputDisplay.value = "";
        return;
    }

    if(input === "="){
        secondNum = outputDisplay.value;

        let result = operate(firstNum, secondNum, operator);

        outputDisplay.value = result;
        return;
    }

    outputDisplay.value += input;
}