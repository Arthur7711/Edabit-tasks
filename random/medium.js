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
// function redundant(str) {
//   return () => str;
// }
// const f1 = redundant("apple");
// console.log(f1()); //➞ "apple"

// const f2 = redundant("pear");
// console.log(f2()); //➞ "pear"

// const f3 = redundant("");
// console.log(f3()); //➞ ""

// 3)
// Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

// Examples
// function possibleBonus(a, b) {
//     const dif = (b - a)
//     return b > a && dif>=1 && dif<=6
// }
// console.log(possibleBonus(3, 7)) //➞ true

// console.log(possibleBonus(1, 9)) //➞ false

// console.log(possibleBonus(5, 3)) //➞ false

// 4)
// Right Shift by Division
// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.

// Examples

// function shiftToRight(a, b) {
//   return Math.floor(a / 2 ** b);
// }
// console.log(shiftToRight(80, 3)); //➞ 10

// console.log(shiftToRight(-24, 2)); //➞ -6

// console.log(shiftToRight(-5, 1)); //➞ -3

// console.log(shiftToRight(4666, 6)); //➞ 72

// console.log(shiftToRight(3777, 6)); //➞ 59

// console.log(shiftToRight(-512, 10)); //➞ -1

// 5)

// Perimeters with a Catch
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

// Use the following formulas:

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:

// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch-free piece of code.
// Notes
// No rounding is needed.

// Examples
// function perimeter(letter, num) {
//   return (letter === "s") * 4 * num + (letter === "c") * 6.28 * num;
// }
// console.log(perimeter("s", 7)); //➞ 28

// console.log(perimeter("c", 4)); //➞ 25.12

// console.log(perimeter("c", 9)); //➞ 56.52

// 6)

// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Notes
// Try to solve this challenge without using strings!

// Examples
function num_of_digits(num) {
  // v1
  // return `${num}`.split('').length

  // v2
  let count = 1;
  if (num >= 10) {
    for (let i = 10; i <= num; i *= 10) {
      count++;
    }
  }
  return count;
}
console.log(num_of_digits(1000)); // ➞ 4

console.log(num_of_digits(12)); // ➞ 2

console.log(num_of_digits(1305981031)); //➞ 10

console.log(num_of_digits(0)); // ➞ 1
