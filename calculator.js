var firstNum = "";
var secondNum = "";
var operator = "";
var lastOperator = "";
var isOperatorPressed = false;
var total = 0;



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

    var history = document.getElementById('history');

    if (!firstNum) {
        firstNum = inputVal.value;
        lastOperator = opr;
        history.innerHTML = inputVal.value + opr
        return;
    }

    if (firstNum) {
        secondNum = inputVal.value;
        inputVal.value = getResult(firstNum, secondNum, lastOperator ? lastOperator : operator)
        history.innerHTML = firstNum + opr + secondNum

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
    var history = document.getElementById('history');
    switch (operator) {
        case "+":
            total = Number(firstNum) + Number(secondNum)
            inputVal.value = total;
            history.innerHTML = firstNum + operator + secondNum
            return total;

        case "-":
            total = Number(firstNum) - Number(secondNum)
            inputVal.value = total;
            history.innerHTML = firstNum + operator + secondNum
            return total;

        case "*":
            total = Number(firstNum) * Number(secondNum)
            inputVal.value = total;
            history.innerHTML = firstNum + operator + secondNum
            return total;

        case "/":
            total = Number(firstNum) / Number(secondNum)
            inputVal.value = total;
            history.innerHTML = firstNum + operator + secondNum
            return total;

        case "%":
            total = Number(firstNum) % Number(secondNum)
            inputVal.value = total;
            history.innerHTML = firstNum + operator + secondNum
            return total;
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
    secondNum = ""
    operator = "";
    lastOperator = ""
    total = ""
    inputVal.value = "";
    history.innerHTML = ""
}


