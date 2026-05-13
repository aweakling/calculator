const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
let operator = "";
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.textContent;
        operate(keyValue);
    });
});

function calculate (num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);

    if(operator === "+") return num1 + num2;
    if(operator === "-") return num1 - num2;
    if(operator === "x") return num1 * num2;
    if(operator === "/") return num1 / num2;
}

function operate (input) {
    
    if(input === "C"){
        outputDisplay.value = "";
        firstNum = "";
        secondNum = "";
        operator = "";
        return;
    } 

    if(!isNaN(input)){

        if(shouldResetDisplay){
            outputDisplay.value = "";
            shouldResetDisplay = false;
        }

        outputDisplay.value += input;
        return;
    }

    if (["+", "-", "x", "/"].includes(input)) {
        
        if(firstNum === ""){
            firstNum = outputDisplay.value;

        } else if(operator !== ""){

            secondNum = outputDisplay.value.split(operator).pop();

            firstNum = calculate(firstNum, secondNum, operator);
           
            outputDisplay.value = firstNum;

        }
        
        operator = input;

        outputDisplay.value += input;
        return;
    }
    
    if (input === "=") {
        
        if(firstNum === "" || operator === "") return;

        secondNum = outputDisplay.value.split(operator).pop().trim();

        const result = calculate(firstNum, secondNum, operator);

        outputDisplay.value = result;

        firstNum = result;
        secondNum = "";
        operator = "";
        shouldResetDisplay = true;
    }

    outputDisplay.value += input;
}