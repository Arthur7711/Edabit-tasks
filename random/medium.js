// 1)

// How Much is True?
// Create a function which returns the number of true values there are in an array.
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// Examples
// function countTrue(booleans) {
//   return booleans.filter(Boolean).length;
// }
// console.log(countTrue([true, false, false, true, false])); // ➞ 2

// console.log(countTrue([false, false, false, false])); // ➞ 0

// console.log(countTrue([])); // ➞ 0

// 2)
// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.
// Notes
// Your function should return a function, not a string.

// Examples
function redundant(str) {
  return () => str;
}
const f1 = redundant("apple");
console.log(f1()); //➞ "apple"

const f2 = redundant("pear");
console.log(f2()); //➞ "pear"

const f3 = redundant("");
console.log(f3()); //➞ ""
