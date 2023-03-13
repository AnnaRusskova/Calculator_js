const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
console.log(screen)

let calculation = [];
let accumulativeCalculation;

let calculate = (button) => {
    let value = button.textContent;
    if(value === 'CLEAR'){
        calculation = [];
        screen.textContent = '.';
    } else if(value ==='='){
        console.log(accumulativeCalculation)
        screen.textContent = eval(accumulativeCalculation);
        calculation = [];
    } else {
        calculation.push(value);
        console.log(calculation)
        accumulativeCalculation = calculation.join('');
        screen.textContent = accumulativeCalculation;
    }
}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)));