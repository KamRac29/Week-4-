class calulator {
    constructor(previousTextElement ,currentTextElement) {
    this.previousTextElement = previousTextElement
    this.currentTextElement = currentTextElement 
    this.clear()
    }
    // Clear out the different variables
    clear(){
        this.current = ''
        this.previous = ''
        this.operation = undefined
}
// delete for removing numbers 
    delete(){
this.current =this.current.toString() .slice(0,-1)
}
// adds to the output screen. This also allows the user to only enter in one period and not multiple by including the if 
    appendNumber(number) {
       if (number === '.' && this.current.includes('.')) return 
       this.current = this.current.toString() + number.toString()
}
// this clears the current and puts in the previous operand.  Also will do the computation automatic
    chooseOperation(operation) {
        if (this.current === '') return
        if (this.previous !== ''){
            this.compute()
        }
        this.operation = operation
        this.previous = this.current
        this.current =' '
} 
// computes the values inside of the calculator, added the if statement will ensure that the code wont just run when the equal sign is pressed.
 
    compute(){
        let computation
        const previous=parseFloat(this.previous)
        const current=parseFloat(this.current)
        if(isNaN(previous) || isNaN(current)) return
        switch (this.operation){
            case '+':
            computation=previous + current 
            break
            case '-':
            computation=previous - current 
            break
            case '*':
            computation=previous * current 
            break
            case '÷' :
            computation=previous / current 
            break
           default:return
        //  defualt is used as an else statement just incase none of the operands are used 
    }
    this.current=computation
    this.operation=undefined
    this.previous= ''

}
//  update the display / output section whenever clicking on the number
    updateDisplay(){
        this.currentTextElement.innerText = this.current
        if(this.operation  != null){
        this.previousTextElement.innerText = `${this.previous} ${this.operation}`


    }

} 
} 

// queryselectorAll calls everything while query selector calls for something specific

const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const clearButton = document.querySelector ('[clear]')
const deleteButton = document.querySelector('[delete]')
const previousTextElement = document.querySelector ('[previous]')
const currentTextElement = document.querySelector('[current]')
const calculator = new calulator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener ('click' , () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})
 
operationButtons.forEach(button => {
    button.addEventListener ('click' , () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay
})

clearButton.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click' , button =>{
    calculator.delete()
    calculator.updateDisplay()
    
})

