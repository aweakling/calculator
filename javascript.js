const buttons = document.querySelectorAll(".key");
const operatorButtons = document.querySelectorAll(".key.operator");
const outputDisplay = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
let operator = "";
let resetDisplay = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.textContent;
        
        operatorButtons.forEach(btn => {
            btn.style.backgroundColor = "orange";
        });
        if(button.classList.contains("operator")){
            button.style.backgroundColor = "pink";
        }

        calculate(keyValue);
    });
});

function operate (num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);

    let result;
    
    if(operator === "+") result = num1 + num2;
    if(operator === "-") result = num1 - num2;
    if(operator === "x") result = num1 * num2;
    if(operator === "/") {
        if(num2 === 0) return "Error";
        result = num1 / num2;
    }

    return Number(result.toFixed(2));
}

function calculate (input) {

    if(input === "C"){
        outputDisplay.value = "";
        firstNum = "";
        secondNum = "";
        operator = "";
        resetDisplay = false;
        return;
    }

    if((["+", "-", "x","/"]).includes(input)){

        if(operator !== "" && outputDisplay.value === "") return;

        if(firstNum !== "" && operator !== ""){
            secondNum = outputDisplay.value;
            result = operate(firstNum, secondNum, operator);
            outputDisplay.value = result;
            firstNum = result;
        } else {
            firstNum = outputDisplay.value;
        }
        operator = input;
        resetDisplay = true;
        return;
    }

    if(input === "."){
        if(outputDisplay.value.includes(".")){
            return;
        }

        if(outputDisplay.value === ""){
            outputDisplay.value = "0"
        }
    }

    if(input === "="){
        
        if (firstNum === "" || operator === "") return;
        
        secondNum = outputDisplay.value;

        let result = operate(firstNum, secondNum, operator);
        
        if(result === "Error"){
            outputDisplay.value = "Cannot divide by 0"
        } else {
            outputDisplay.value = result;
        }

        firstNum = "";
        operator = "";
        return;
    }

    if(resetDisplay){
        outputDisplay.value = "";
        resetDisplay = false;
    }   
    outputDisplay.value += input;
}