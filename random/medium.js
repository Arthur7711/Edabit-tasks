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
function possibleBonus(a, b) {
    const dif = (b - a)
    return b > a && dif>=1 && dif<=6
}
console.log(possibleBonus(3, 7)) //➞ true

console.log(possibleBonus(1, 9)) //➞ false

console.log(possibleBonus(5, 3)) //➞ false