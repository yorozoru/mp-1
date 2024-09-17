function inputGrabber () {
    let firstNumber = document.getElementById("firstNum").value;
    let secondNumber = document.getElementById("secondNum").value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)){
        output("One of the two fields is not a number.")
    }
    else{
        return [firstNumber,secondNumber];
    }
}

function output (result){
    if (result < 0){
        document.getElementById("output").style.color = '#d00';
    } else {
        document.getElementById("output").style.color = '#000000';
    }
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
    let original_val = 1;
    for (let i = 0; i < Math.abs(y); i++){
        original_val = x*original_val;
    }
    if (y < 0){
        output(1/original_val)
    }
    else {
        output(original_val)
    }

}

function cleared(){
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    output("");
}