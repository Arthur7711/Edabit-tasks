// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.
// Examples

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

function missingNum (digits) {
    const possibleTotal = 55 //1+2+...+10 = 55
    const sum = digits.reduce((acc, next) => acc+=next, 0)
    return possibleTotal - sum
}