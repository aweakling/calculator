const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelector("#display");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

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

    

}