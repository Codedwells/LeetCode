const romanToInt = function (romanNum) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < romanNum.length; i++) {
		const curr = romanMap[romanNum[i]];
		const next = romanMap[romanNum[i + 1]];

		if (curr < next) {
			result += next - curr;
			i++;
		} else {
			result += curr;
		}
	}

	return result;
};

const converted = romanToInt('MCD');
console.log(converted); //1400
