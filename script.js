let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");

numbers.forEach((currentValue) => {

    currentValue.addEventListener("click", () => {
        
        let output = display.textContent;
        if (!(isNaN(output.charAt(output.length - 1)))) {
            output += currentValue.textContent;
        } else {
            output += " " + currentValue.textContent;
        }
        display.textContent = output;
    })
});

operators.forEach((currentValue) => {
    currentValue.addEventListener("click", () => {

        let output = display.textContent;
        if (!(isNaN(output.charAt(output.length - 1)))) {
            output += " " + currentValue.textContent;
        }
        display.textContent = output;

    })
})

equal.addEventListener("click", () => {

    let output = display.textContent.split(" ");

    operate(output, "/", divide);
    operate(output, "x", multiply);
    operate(output, "-", substract);
    operate(output, "+", add);

    
        display.textContent = output.join(" ");
        if (display.textContent.includes("NaN")) {
            display.textContent = "Singularity!";
        }

})

function operate(output, operator, operatorFunction) {
    output.forEach((currentValue) => {
        if (currentValue === operator) {
            let divIndex = output.indexOf(operator);
        if (divIndex !== -1) {
        output[divIndex] = operatorFunction(output[divIndex -1], output[divIndex +1]);
        output.splice(divIndex - 1, 1);
        output.splice(divIndex, 1);
        }
        }
    })
}

clear.addEventListener("click", () => {
    display.textContent = "";
})

function add(x, y) {
    return +x+ +y;
}

function substract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    if (y == 0) {
        return "Singularity!"
    } else {
        return x/y;
    }
}