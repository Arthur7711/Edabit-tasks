// Algebra Sequence — Boxes
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// Step (the input) is always a positive integer (or zero).
// For an odd step add 3, for an even step subtract 1.
console.log(boxSeq(0)); //➞ 0
console.log(boxSeq(1)); //➞ 3
console.log(boxSeq(2)); //➞ 2

function boxSeq(num) {
  if (num % 2) {
    return num + 2;
  }
  return num;
}
