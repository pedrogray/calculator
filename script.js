let operator = ''
let screenContent = document.querySelector(".screenContent")
screenContent.textContent=""


let numberButtons = []
for (let i=0; i<=9; i++) {
    
    numberButtons[i] = document.querySelector("#number"+i)
    numberButtons[i].addEventListener("click", function() { screenContent.textContent += [i]})
}

let dotButton = document.querySelector("#dot")
dotButton.addEventListener("click", function(){
    if (screenContent.textContent.indexOf('.') == -1) {
        screenContent.textContent += "."
    }
})



sumButton = document.querySelector("#sumButton")
sumButton.addEventListener("click", function () { 
    add()
})

minusButton = document.querySelector("#minusButton")
minusButton.addEventListener("click", function(){
    substract()
})

equalsButton = document.querySelector("#equalsButton")
equalsButton.addEventListener("click", function() {
operate();
})

clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", function() { 
    clear();
})

divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click", function() { 
    divide();
})

multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.addEventListener("click", function() {
    multiply()
})




function add() {
    if (operator !== '') {operate()
        number1 = parseFloat(screenContent.textContent)
        operator= "";}
    else {
    number1 = parseFloat(screenContent.textContent)
    operator= "+";
    screenContent.textContent = "";}
}

function substract() {
    if (operator !== '') {operate()
        number1 = parseFloat(screenContent.textContent)
        operator= ""}
    else {
        number1 = parseFloat(screenContent.textContent);
        operator="-";
        screenContent.textContent=''
    }
}

function multiply () {
    if (operator !== '') {operate()
        number1 = parseFloat(screenContent.textContent)
        operator= ""}
    else {
        number1 = parseFloat(screenContent.textContent);
        operator="*";
        screenContent.textContent=''
    }
}

function divide () {
    if (operator !== '') {operate()
        number1 = parseFloat(screenContent.textContent)
        operator= ""}
    else {
        number1 = parseFloat(screenContent.textContent);
        operator="/";
        screenContent.textContent=''
    }
}

function operate() {
    number2 = parseFloat(screenContent.textContent)
    if (operator == "+") {
        let result = number1+number2;
        screenContent.textContent = result.toFixed(2);
        number1 = result;
        number2 = ''
        operator= ''};
    if (operator == "-") {
        let result = number1-number2;
        screenContent.textContent = result.toFixed(2);
        number1 = result;
        number2 = ''
        operator = ''
    }
    if (operator =="*") {
        let result = number1*number2;
        screenContent.textContent = result.toFixed(2);
        number1 = result;
        number2 = ''
        operator = ''
    }
    if (operator == "/") {
        if (number2 == 0) {screenContent.textContent = "LMFAO."}
        else{
        let result = number1/number2;
        screenContent.textContent=result.toFixed(2);
        number1=result;
        number2 = ''
        operator = ''
    }
    }
}

function clear() {
    number1=''
    number2=''
    operator=''
    screenContent.textContent = ''
}