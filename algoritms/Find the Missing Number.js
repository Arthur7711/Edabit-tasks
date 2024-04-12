// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.
function missingNum(arr) {
  const sumTillTan = 55;
  return (
    sumTillTan -
    arr.reduce((acc, next) => {
      return acc + next;
    }, 0)
  );
}
