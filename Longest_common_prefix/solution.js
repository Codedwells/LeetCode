var longestCommonPrefix = function (strs) {
	if (!strs.length) return '';

	for (let i = 0; i < strs[0].length; i++) {
		if (!strs.every((string) => string[i] === strs[0][i])) {
			return strs[0].slice(0, i);
		}
	}

	return strs[0];
};

let prefix = longestCommonPrefix(['flower', 'flow', 'flight']);

console.log(prefix); // 'fl'

