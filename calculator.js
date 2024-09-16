function inputGrabber () {
    let firstNumber = document.getElementById("firstNum").value;
    let secondNumber = document.getElementById("secondNum").value;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)){
        output("One of the two fields is not a number.")
    }
    else{
        return [firstNumber,secondNumber];
    }
}

function output (result){
    document.getElementById("output").innerHTML=String(result);
}

function addition (){
    let array = inputGrabber();
    let result =  array[0] + array[1];
    output(result);
}

function subtraction (){
    let array = inputGrabber();
    let result =  array[0] - array[1];
    output(result);
}

function division (){
    let array = inputGrabber();
    let result =  array[0] / array[1];
    output(result);
}

function multiplication (){
    let array = inputGrabber();
    let result =  array[0] * array[1];
    output(result);

}
function pow (){
    let array = inputGrabber();
    let x = array[0];
    let y = array[1];
    if (y === 0) {
        output(1)
    }
    else if (y < 0){
        let original_val = x;
        for (let i = 1; i < y; i++){
            x = x*original_val;
        }
        let result = x;
        output(1/result)
    }
    else {
        let original_val = x;
        for (let i = 1; i < y; i++){
            x = x*original_val;
        }
        let result = x;
        output(result)
    }
}

function cleared(){
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    output("");
}