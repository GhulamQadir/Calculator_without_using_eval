var numberArray = [];
var operators = ["+", "-", "*", "/", "%"]
var firstNum = Number("");
var secondNum = Number("");
var operator = "";
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
}


function equalsToOperator() {
    getResult(firstNum, secondNum, operator)
}


function getOperator(opr) {

    if (operator) {
        getResult(firstNum, operator, secondNum) ///ye code abhi add kia ha lkn solution nhi ha proper
        // alert("Operator is already given")
    }
    else {
        isOperatorPressed = true
        var inputVal = document.getElementById('inputVal');
        firstNum = inputVal.value;


        if (firstNum) {
            operator = opr
        }

    }

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
    operator = ""
}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}
