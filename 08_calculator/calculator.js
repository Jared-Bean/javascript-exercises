const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const start = 0;
  return array.reduce(
    (a, b) => a + b ,  start);
};

const multiply = function(array) {
  const start = 1;
  return array.reduce(
    (a, b) => a * b ,  start);

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n == 0) return 1;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
