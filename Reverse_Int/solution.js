const reverse = function (x) {
	let split = String(x).split('').reverse();

	if (split[split.length - 1] == '-') {
		split.pop();
		split.unshift('-');
	}

	let reversedNum = Number(split.join(''));

	if (reversedNum < -2_147_483_648 || reversedNum > 2_147_483_648) return 0;

	return reversedNum;
};

console.log(reverse(3790)); // 973