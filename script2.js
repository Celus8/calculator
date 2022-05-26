// two digit operation version

let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator");

let firstNumber;
let secondNumber;
let operation;
let firstClicked = false;
let operatorClicked = false;
let secondClicked = false;


numbers.forEach((currentValue) => {

    currentValue.addEventListener("click", () => {

        if (!firstClicked) {
            firstNumber = +currentValue.textContent;
            firstClicked = true;
            display.textContent = firstNumber;    
        } else if (operatorClicked && !secondClicked) {
            secondNumber = +currentValue.textContent;
            secondClicked = true;
            display.textContent += secondNumber;    
        }
    })
});

operators.forEach((currentValue) => {
    currentValue.addEventListener("click", () => {

        if (firstClicked && !operatorClicked) {
            switch(currentValue.textContent) {
                case "+":
                    operation = add;
                    display.textContent += currentValue.textContent;    
                    break;
                case "-":
                    operation = substract;
                    display.textContent += currentValue.textContent;  
                    break;
                case "x":
                    operation = multiply;
                    display.textContent += currentValue.textContent;  
                    break;
                case "/":
                    operation = divide;
                    display.textContent += currentValue.textContent;  
                    break;
                default:
                    break;
            
            }
            operatorClicked = true;
        } else if (secondClicked && currentValue.textContent === "=") {
            operate(operation, firstNumber,secondNumber);
            firstClicked = false;
            operatorClicked = false;
            secondClicked = false;
        } else if (currentValue.textContent === "Clear") {
            display.textContent = "..";
            firstClicked = false;
            operatorClicked = false;
            secondClicked = false;
        }

    })
})






let display = document.querySelector("#display");

function add(x, y) {
    display.textContent = x+y;
}

function substract(x, y) {
    display.textContent = x-y;
}

function multiply(x, y) {
    display.textContent = x*y;
}

function divide(x, y) {
    if (y === 0) {
        display.textContent = "Singularity!"
    } else {
        display.textContent = x/y;
    }
}

function operate(operator, x, y) {
    operator(x,y);
}