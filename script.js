function add(x, y) {
    return x+y;
}

function substract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    if (y === 0) return "Singularity!";
    return x/y;
}

function operate(operator, x, y) {
    return operator(x,y);
}