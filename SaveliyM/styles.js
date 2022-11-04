function greet(){
    alert("Hello World!");
}

function greet2(){
    console.log("Hello World!");
}

function shoutTen(){
    console.log("10!");
}

function intialize(){
    messageOutput = document.getElementById("output");

    message = "";
    num1 = 3;
    num2 = 7
    outputDiv = document.getElementById("divout");

    numberOutput = document.getElementById("numberout");
    negativeButton = document.getElementById("negativebtn");
    myNumber = 0;
    negativesAllowed = false;
   
    display();
}

function subtractNumbers(){
    var result = num1 - num2;
    console.log(result);
}

function addNumbers(){
    var result = num1 + num2;
    console.log(result);
}

function multiplyNumbers(){
    var result = num1 * num2;
    console.log(result);
}

function divideNumbers(){
    var result = num1 / num2;
    console.log(result);
}

function clickResponse(){
    outputDiv.innerHTML = "Now you've clicked the button";
}

function addOne(){
    myNumber ++;
    display();
}

function subtractOne(){
    myNumber --;
    if (myNumber < 0 && !negativesAllowed){
        myNumber = 0;
    }
    display();
}

function display(){
    
    numberOutput.innerHTML = myNumber;

    if (!negativesAllowed){
        negativeButton.innerHTML = "Negatives are OFF";
    } else {
        negativeButton.innerHTML = "Negatives are ON";
    }
}

function toggleNegatives(){
     negativesAllowed = !negativesAllowed
    display();
}

function display2(){
    messageOutput.innerHTML = message;
}

function addA(){
    message += "A";
    display2();
}

function addCharacter(ch){
    message += ch;
    display2();
}