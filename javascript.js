const buttons = document.querySelectorAll(".key");
const outputDisplay = document.querySelectorAll("#display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const keyValue = button.value;
        console.log(keyValue);
        outputDisplay.innerText = "Output: " + keyValue;
    });
});