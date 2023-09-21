let calc = '';
let display = document.querySelector('.display');
const operations = ['+', '-', '*', '/'];

document.querySelectorAll('.calc__btn').forEach(btn => {
	btn.addEventListener('click', e => {
		calc += e.currentTarget.textContent;
		display.value = calc;
	});
});

document.querySelector('.calc__result').addEventListener('click', () => {
	calc = parseFloat(eval(calc).toFixed(6));
	display.value = calc;
});

document.querySelector('.calc__clear').addEventListener('click', () => {
	calc = '';
	display.value = calc;
});
