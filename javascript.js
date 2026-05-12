const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.textContent;
        operate(keyValue);
    });
});

function operate (input) {
    
    if(input === "C"){
        outputDisplay.value = "";

        firstNum = "";
        secondNum = "";
        operator = "";

    } else if (input === "+" || input === "-" || input === "*" || input === "/" ) {
        operator = input;

        firstNum = outputDisplay.value;

        outputDisplay.value = "";
    } else if (input === "=") {
        secondNum = outputDisplay.value;

        if (operator === "+") {
            outputDisplay.value = Number(firstNum) + Number(secondNum);
        }
        if (operator === "-") {
            outputDisplay.value = Number(firstNum) - Number(secondNum);
        }
        if (operator === "*") {
            outputDisplay.value = Number(firstNum) * Number(secondNum);
        }
        if (operator === "/") {
            outputDisplay.value = Number(firstNum) / Number(secondNum);
        }
    }

    else {
        outputDisplay.value += input;
    }
}