const operations = ['+', '-', '*', '/', '.'];
export const validation = value => {
	const valueArray = value.split('');

	if (['+', '*', '/', '.'].includes(value[0])) {
		value = value.slice(1);
	}

	if (valueArray.length > 1 && value[0] == '0' && value[1] != '.') {
		value = value.slice(1);
	}

	valueArray.forEach((symbol, i) => {
		if (operations.includes(symbol) && operations.includes(value[i - 1])) {
			value = value.slice(0, -1);
		}
	});
	return value;
};

export const resultValidation = value => {
	if (operations.includes(value[value.length - 1])) {
		value = value.slice(0, -1);
	}
	return value;
};
