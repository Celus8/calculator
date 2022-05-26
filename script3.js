// long operation version

let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let equaled = false;
let cleared = false;

numbers.forEach((currentValue) => {

    

    currentValue.addEventListener("click", () => {
        
        let outputArr = display.textContent.split(" ");

        if (outputArr.length !== 1) {
            equaled = false;
        }
        if (equaled) {
            display.textContent = "";
            equaled = false;
        }
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
        
        let outputArr = display.textContent.split(" ");

        if (outputArr.length === 1 && display.textContent !== "Singularity!") {
            equaled = false;
        }

        if (equaled) return;
        let output = display.textContent;
        if (!(isNaN(output.charAt(output.length - 1))) && output !== "") {
            output += " " + currentValue.textContent;
        }
        display.textContent = output;

    })
})

equal.addEventListener("click", () => {

    let output = display.textContent.split(" ");

    if (isNaN(output[output.length - 1]) || output.length === 1) return;

    let divides = 0;
    let multiplies = 0;
    let substracts = 0;
    let adds = 0;

    output.forEach((currentValue) => {
        switch (currentValue) {
            case "/":
                divides++;
                break;
            case "x":
                multiplies++;
                break;
            case "-":
                substracts++;
                break;
            case "+":
                adds++;
                break;
            default:
                break;
        }
    })

    for (let i = 0; i < divides; i++) {
        operate(output, "/", divide);
    }
    for (let i = 0; i < multiplies; i++) {
        operate(output, "x", multiply);
    }
    for (let i = 0; i < substracts; i++) {
        operate(output, "-", substract);
    }
    for (let i = 0; i < adds; i++) {
        operate(output, "+", add);
    }

    
        display.textContent = output.join(" ");
        if (display.textContent.includes("NaN")) {
            display.textContent = "Singularity!";
        }

    equaled = true;

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
    equaled = true;
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