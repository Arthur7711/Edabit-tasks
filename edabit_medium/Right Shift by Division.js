// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6
// shiftToRight(-5, 1) ➞ -3
// shiftToRight(4666, 6) ➞ 72
// shiftToRight(3777, 6) ➞ 59
// shiftToRight(-512, 10) ➞ -1

function shiftToRight(x, y) {
  return x / (2 ** y);
}
