import { validation, resultValidation } from './modules/validation.js';
const calcBtns = document.querySelectorAll('.calc__btn');
const totalResult = document.querySelector('.calc__resultBtn');
const clearBtn = document.querySelector('.calc__clearBtn');
let display = document.querySelector('.display');
let calcValue = '';

const handleEnterValues = e => {
	calcValue = validation((calcValue += e.currentTarget.textContent));
	display.value = calcValue;
};

const handleCalculateResult = () => {
	if (calcValue.toString().trim() && calcValue.length > 1) {
		calcValue = resultValidation(calcValue);
		calcValue = parseFloat(eval(calcValue).toFixed(6));
		display.value = calcValue;
	}
};

const handleClear = () => {
	calcValue = '';
	display.value = calcValue;
};

calcBtns.forEach(btn => {
	btn.addEventListener('click', handleEnterValues);
});

totalResult.addEventListener('click', handleCalculateResult);

clearBtn.addEventListener('click', handleClear);
