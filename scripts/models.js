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
        this.currentOperand = this.currentOperand.slice(0,-1);
    }

    addNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return; //validate the number has only a dot

        this.currentOperand = String(this.currentOperand) + String(number);
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;                     //set operation text
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        //console.log(this.currentOperand);
    }

    //helper function
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay(currentOperatorTextElement, previousOperandTextElement) {
        
        currentOperatorTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
            previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else {
            previousOperandTextElement.innerText = '';
        }
    }
}

export { Calculator };