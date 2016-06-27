function isEven(a) {
	res = a % 2;
	if (res == 0) {
		return true;
	}
	else {
		return false;
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0));
console.log(isEven(1));