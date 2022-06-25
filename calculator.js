var numberArray = [];
var operators = ["+", "-", "*", "/", "%"]
var firstNum = Number("");
var secondNum = Number("");
var operator = Number("");
var isOperatorPressed = false;
var total = 0;

var inputVal = document.getElementById('inputVal');


function getNum(num) {
    var inputVal = document.getElementById('inputVal');
    inputVal.value += num
    if (inputVal.value === "+" || inputVal.value === "-" || inputVal.value === "*" || inputVal.value === "/" || inputVal.value === "%") {
        inputVal.value = ""
    }



    if (isOperatorPressed) {
        inputVal.value = num;
        isOperatorPressed = false;
    }
    if (firstNum != "" && operator != "") {
        secondNum = inputVal.value

    }
    console.log(`Second num ${secondNum}`)

    // inputVal.value += num;



}


function equalsToOperator() {
    getResult(firstNum, secondNum, operator)
}


function getOperator(opr) {
    isOperatorPressed = true
    var inputVal = document.getElementById('inputVal');
    firstNum = inputVal.value;


    if (firstNum) {
        operator = opr
    }

    if (secondNum) {
        getResult
    }
    console.log(operator)

}





function clearInput() {
    var inputVal = document.getElementById('inputVal');
    var history = document.getElementById('history')
    firstNum = "";
    operator = "";
    secondNum = ""
    total = ""
    inputVal.value = "";
    history.innerHTML = ""
}





function getResult(firstNum, secondNum, operator) {

    switch (operator) {
        case "+":
            total = Number(firstNum) + Number(secondNum)
            break;
        case "-":
            total = Number(firstNum) - Number(secondNum)
            break;

        case "*":
            total = Number(firstNum) * Number(secondNum)
            break;

        case "/":
            total = Number(firstNum) / Number(secondNum)
            break;
    }
    inputVal.value = total
    secondNum = ""
}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}



