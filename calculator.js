var numberArray = [];
var operators = ["+", "-", "*", "/", "%"]
var operator = ""




function getNum(num) {
    var inputVal = document.getElementById('inputVal');
    inputVal.value += (num)
    if (inputVal.value === "+" || inputVal.value === "-" || inputVal.value === "*" || inputVal.value === "/" || inputVal.value === "%") {
        inputVal.value = ""
    }
    var inputVal2 = document.getElementById('inputVal').value;
}





function getOperator() {

}


function clearInput() {
    var inputVal = document.getElementById('inputVal');
    var history = document.getElementById('history')
    inputVal.value = "";
    history.innerHTML = ""
}





function getResult() {

    var inputVal = document.getElementById('inputVal').value;
    var oper = ""
    var total = 0
    for (var i = 0; i < inputVal.length; i++) {
        if (inputVal[i] === "+" || inputVal[i] === "-" || inputVal[i] === "*" || inputVal[i] === "/") {

            oper = inputVal[i];
            console.log(oper)
            var splitted = inputVal.split(oper)
            numberArray.push(splitted)
            console.log(splitted)
        }
    }
    var num1 = Number(numberArray[0][0]);
    var num2 = Number(numberArray[0][1]);
    if (oper === "+") {
        total = num1 + num2
    }
    else if (oper === "-") {
        total = num1 - num2
    }

    else if (oper === "*") {
        total = num1 * num2
    }

    else if (oper === "/") {
        total = (num1 / num2).toFixed(2)
    }
    else if (oper === "%") {
        total = num1 % num2
    }
    console.log(num2)


    var inputVal2 = document.getElementById('inputVal');

    inputVal2.value = total;
    console.log(total)

    numberArray = []
}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}



