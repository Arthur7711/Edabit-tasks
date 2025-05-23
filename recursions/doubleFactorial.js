// Double Factorial
// Create a function that takes a number num and returns its double factorial.
// Notes
// Assume all input values are greater than or equal to -1.
// Try to solve it with recursion.
// Double factorial is not the same as factorial * 2.

// Examples
// 9*7*5*3*1 = 945
console.log(doubleFactorial(0)); // ➞ 1
console.log(doubleFactorial(2)); // ➞ 2
console.log(doubleFactorial(9)); // ➞ 945
console.log(doubleFactorial(14)); // ➞ 645120

function fastDoubleFactorial(num, result = 1) {
  if (num <= 1) {
    return result;
  }
  let total = 1;
  for (let i = num; i > 0; i -= 2) {
    total *= i;
  }
  return total
}

function doubleFactorial(num, result = 1) {
  if (num <= 1) {
    return result;
  }
  const total = num * result;
  return doubleFactorial(num-2, total)
}
