// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

// Examples
function missingNum(parameters) {
  const total = 55;
  const numbersSum = parameters.reduce((acc, num) => (acc += num), 0);
  return total - numbersSum;
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5

console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10

console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7
