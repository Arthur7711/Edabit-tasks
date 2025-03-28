// Find the Mean of All Digits
// Create a function that returns the mean of all digits.
// Examples
// Notes
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.
console.log(mean(42)); // ➞ 3
console.log(mean(12345)); // ➞ 3
console.log(mean(333)); // ➞ 3

function mean(num) {
  const digitsArray = String(num).split("");
  const sum = digitsArray.reduce((acc, next) => (acc += Number(next)), 0);
  return sum / digitsArray.length;
}
