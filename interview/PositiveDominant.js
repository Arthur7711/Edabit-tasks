// // An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false
// 0 counts as neither a positive nor a negative value.
function isPositiveDominant(arr) {
  const uniqueItems = new Set();
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!uniqueItems.has(el)) {
      uniqueItems.add(el);
      if (el > 0) {
        positiveCount++;
      } else if (el < 0) {
        negativeCount++;
      }
    }
  }
  return positiveCount > negativeCount;
}
console.log(isPositiveDominant([0, -4, -1]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
