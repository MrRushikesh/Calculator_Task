let currentInput = '';
let previousInput = '';
let currentOperator = '';




// Display Function 
function display(){
    document.getElementById('result').value = currentInput;
}


// AddNumber Function 
function addNumber(number){
    currentInput += number;
    display();
}

// Calculate Function 

function calculate(){
    if(previousInput === '' || currentInput === '') return; 
    const number1 = parseInt(previousInput);
    const number2 = parseInt(currentInput);

    let result = 0; 

    switch(currentOperator){
        case '+' : result = number1 + number2;
        break;

        case '-' : result = number1 - number2;
        break;

        case '/' : result = number1 / number2;
        break;

        case '*' : result = number1 * number2;
        break;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    display();
}

// Add Operator Function -: 

function addOperator(operator){
    if(currentInput === '') return; 
    if(previousInput !== ''){
        calculate();
    }

    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay(){
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display()
}


