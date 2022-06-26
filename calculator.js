
var firstNum = "";
var secondNum = "";
var operator = "";
var lastOperator = "";
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
}




function getOperator(opr) {

    isOperatorPressed = true
    var inputVal = document.getElementById('inputVal');
    operator = opr;

    if (!firstNum) {
        firstNum = inputVal.value;
        lastOperator = opr;
        return;
    }

    if (firstNum) {
        secondNum = inputVal.value;
        inputVal.value = getResult(firstNum, secondNum, lastOperator ? lastOperator : operator)

    }
    secondNum = ""
    operator = ""
    lastOperator = "";
    firstNum = inputVal.value
    return;
}

function equalsToOperator() {
    getResult(firstNum, secondNum, operator)
}


function getResult(firstNum, secondNum, operator) {

    switch (operator) {
        case "+":
            total = Number(firstNum) + Number(secondNum)
            inputVal.value = total;
            // firstNum = ""
            // operator = ""
            // lastOperator = ""
            // secondNum = ""
            // firstNum = inputVal.value
            return total;
            break;
        case "-":
            total = Number(firstNum) - Number(secondNum)
            inputVal.value = total;
            return total;
            break;

        case "*":
            total = Number(firstNum) * Number(secondNum)
            inputVal.value = total;
            return total;
            break;

        case "/":
            total = Number(firstNum) / Number(secondNum)
            inputVal.value = total;
            return total;
            break;

        case "%":
            total = Number(firstNum) % Number(secondNum)
            inputVal.value = total;
            return total;
            break;
    }
    firstNum = inputVal.value
    secondNum = ""
    lastOperator = ""
    operator = ""

}



function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)
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


