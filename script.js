let firstNumber = ''
let secondNumber = ''
let operator = ''

let numberButtons = []
for (let i=0; i<=9; i++) {
    numberButtons[i] = document.querySelector("#number"+i)
    numberButtons[i].addEventListener("click", function() { screenContent.textContent += [i]})
}

let screenContent = document.querySelector(".screenContent")
screenContent.textContent=""

sumButton = document.querySelector("#sumButton")
sumButton.addEventListener("click", function () { 
    add()
})
equalsButton = document.querySelector("#equalsButton")
equalsButton.addEventListener("click", function() {
operate()
})


function add() {
    if (operator !== '') {operate()}
    else {
    number1 = parseInt(screenContent.textContent)
    operator= "+";
    screenContent.textContent = "";}
}

function substract(number1,number2) {
    let sub = number1-number2;
    return console.log(sub);
}

function multiply (number1,number2) {
    let mult = number1*number2;
    return console.log(mult);
}

function divide (number1,number2) {
    let division = number1/number2;
    return console.log(division)
}

function operate() {
    number2 = parseInt(screenContent.textContent)
    if (operator == "+") {
        let result = number1+number2;
        screenContent.textContent = result;
        number1 = result;
        number2 = ''
        operator= ''};
}