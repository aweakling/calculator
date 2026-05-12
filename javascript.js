const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.textContent;
        console.log(keyValue);
        outputDisplay.value += keyValue;
    });
});