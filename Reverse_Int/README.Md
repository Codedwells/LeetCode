# Reverse Int (Medium)

Given a **signed** 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then **return 0**.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## Example 1:

Input: x = **123**
Output: **321**

## Example 2:

Input: x = **-123**
Output: **-321**

## Example 3:

Input: x = **120**
Output: **21**

## Constraints:

    -231 <= x <= 231 - 1

### Solution

```js
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
```

