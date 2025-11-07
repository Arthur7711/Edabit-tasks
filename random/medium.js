// How Much is True?
// Create a function which returns the number of true values there are in an array.
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// Examples
function countTrue(booleans) {
  return booleans.filter(Boolean).length;
}
console.log(countTrue([true, false, false, true, false])); // ➞ 2

console.log(countTrue([false, false, false, false])); // ➞ 0

console.log(countTrue([])); // ➞ 0
