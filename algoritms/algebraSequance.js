// Algebra Sequence — Boxes
//Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// boxSeq(0) ➞ 0
// boxSeq(1) ➞ 3
// boxSeq(2) ➞ 2
// Step (the input) is always a positive integer (or zero).
// For an odd step add 3, for an even step subtract 1.
function boxSeq(step) {
  switch (step) {
    case 0:
      return 0;
    case step % 2 === 1:
      return step + 2;
     case step % 2 === 0:
      return step;
  }
}
