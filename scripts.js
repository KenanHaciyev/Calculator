import { validation, resultValidation } from './modules/validation.js';
let calcValue = '';
let display = document.querySelector('.display');

document.querySelectorAll('.calc__btn').forEach(btn => {
	btn.addEventListener('click', e => {
		calcValue = validation((calcValue += e.currentTarget.textContent));
		display.value = calcValue;
	});
});

document.querySelector('.calc__result').addEventListener('click', () => {
	if (calcValue.toString().trim() && calcValue.length > 1) {
		calcValue = resultValidation(calcValue);
		calcValue = parseFloat(eval(calcValue).toFixed(6));
		display.value = calcValue;
	}
});

document.querySelector('.calc__clear').addEventListener('click', () => {
	calcValue = '';
	display.value = calcValue;
});
