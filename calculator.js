var numberArray = [];
var operators = ["+", "-", "*", "/", "%"]
var firstNum = "";
var secondNum = "";
var operator = "";
var isOperatorPressed = false;




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





function getOperator(opr) {
    isOperatorPressed = true
    var inputVal = document.getElementById('inputVal');
    firstNum = inputVal.value;


    if (firstNum != "") {
        operator = opr

    }




    if (firstNum) {
        console.log(`First num: ${firstNum}`)

        if (operator) {
            console.log(operator)
            if (secondNum) {
                // console.log(`First num: ${firstNum}`)
                // console.log(operator)
                console.log(`Second num>>: ${secondNum}`)
            }
        }
    }
    if (secondNum) {

        getResult()
        // console.log("bhai kam hojay bharosa rkho")

    }
    // console.log(`dusra number==>>${secondNum}`)
}


function clearInput() {
    var inputVal = document.getElementById('inputVal');
    var history = document.getElementById('history')
    inputVal.value = "";
    history.innerHTML = ""
}





function getResult() {
    console.log("ma get result hon")
    console.log(`pehla: ${firstNum}`)
    console.log(operator)
    console.log(`dusra: ${secondNum}`)

    // var inputVal = document.getElementById('inputVal').value;
    // var oper = ""
    // var total = 0
    // for (var i = 0; i < inputVal.length; i++) {
    //     if (inputVal[i] === "+" || inputVal[i] === "-" || inputVal[i] === "*" || inputVal[i] === "/") {

    //         oper = inputVal[i];
    //         console.log(oper)
    //         var splitted = inputVal.split(oper)
    //         numberArray.push(splitted)
    //         console.log(splitted)
    //     }
    // }
    // var num1 = Number(numberArray[0][0]);
    // var num2 = Number(numberArray[0][1]);
    // // calculator-7e3b5

    // if (oper === "+") {
    //     total = num1 + num2
    // }
    // else if (oper === "-") {
    //     total = num1 - num2
    // }

    // else if (oper === "*") {
    //     total = num1 * num2
    // }

    // else if (oper === "/") {
    //     total = (num1 / num2).toFixed(2)
    // }
    // else if (oper === "%") {
    //     total = num1 % num2
    // }
    // console.log(num2)


    // var inputVal2 = document.getElementById('inputVal');

    // inputVal2.value = total;
    // console.log(total)

    // numberArray = []
}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}



