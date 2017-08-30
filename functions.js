// Functions Problem 1
function isEven(num) {
	return num % 2 === 0;
}

// Functions Problem 2
function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;	
}

// Functions Problem 3
function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}