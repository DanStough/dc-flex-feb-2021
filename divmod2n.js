// Find remainder from dividing 2 numbers function

function divide(num1,num2) {
	var quotient = num1 / num2;
	quotient = Math.floor(quotient)
	return quotient;
}

function mod(num1,num2) {
	const remainder = num1 % num2;
	return remainder;
}

const divchek = divide(33,2);
const remchek = mod(33,2);

console.log(`33 divided by 2 is ${divchek} with remainder ${remchek}.`);