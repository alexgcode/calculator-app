import { Calculator } from './models.js';


/*---- calculator -----*/

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('.button--equal');
const deleteButton = document.querySelector('.button--delete');
const resetButton = document.querySelector('.button--reset');
let previousOperandTextElement = document.querySelector('.calculator__previous-operand');
let currentOperandTextElement = document.querySelector('.calculator__current-operand');

const calc = new Calculator(previousOperandTextElement.innerText, currentOperandTextElement.innerText);

numberButtons.forEach(button => {   //for each button execute the function
    button.addEventListener('click', () => {    //every time there is a click in the button execute the function
        calc.addNumber(button.innerText);
        calc.updateDisplay(currentOperandTextElement,previousOperandTextElement);
        //console.log(calc.currentOperand);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText);
        calc.updateDisplay(currentOperandTextElement,previousOperandTextElement);
    });
});

equalButton.addEventListener('click', (button) => {
    calc.compute();
    calc.updateDisplay(currentOperandTextElement,previousOperandTextElement);
});

resetButton.addEventListener('click', (button) => {
    calc.reset();
    calc.updateDisplay(currentOperandTextElement,previousOperandTextElement);
});

deleteButton.addEventListener('click', (button) => {
    calc.delete();
    calc.updateDisplay(currentOperandTextElement,previousOperandTextElement);
});



/*----toggle-----*/

const toggleButtons = document.querySelectorAll("input[type='radio']");

toggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let btnValue = button.value;
        switch(btnValue) {
            case '1':
                console.log(1);
                document.querySelector('main').classList = 'main theme-1';
                break;
            case '2':
                console.log(2);
                document.querySelector('main').classList = 'main theme-2';
                break;
            case '3':
                    console.log(2);
                    document.querySelector('main').classList = 'main theme-3';
                    break;
            default:
                console.log(3);
                document.querySelector('main').classList = 'main theme-1';
        }
        
    });
});