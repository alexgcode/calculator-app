class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperand = previousOperandElement;
        this.currentOperand = currentOperandElement;
    }

    reset() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    addNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return; //validate the number has only a dot

        this.currentOperand = String(this.currentOperand) + String(number);
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay(currentOperatorTextElement) {
        currentOperatorTextElement.innerText = this.currentOperand;
    }
}

export { Calculator };